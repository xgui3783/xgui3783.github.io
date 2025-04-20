#! /bin/bash

src_dir=$1

if [[ -z "$src_dir" ]]
then
    echo "src_dir must be provided"
    exit 1
fi

dst_dir=$2

if [[ -z "$dst_dir" ]]
then
    echo "dst_path must be provided"
    exit 1
fi

dst_dir=$(echo $dst_dir | sed -e 's/\/$//g')
mkdir -p $dst_dir

thumbnails_dir=$dst_dir/thumbnails
mkdir -p $thumbnails_dir

filenames=""

for f in $(find $src_dir -maxdepth 1 -type f)
do
    echo "Processing $f ..."

    basename=$(basename $f)
    new_basename=${basename%.jpg}.webp

    new_fname=${dst_dir}/$new_basename
    touch $new_fname.md
    thumbnail_name=$thumbnails_dir/$new_basename

    echo $new_basename
    filenames="$filenames $new_basename"
    convert $f $new_fname
    convert $new_fname -resize x600 $thumbnail_name
done

# trim whitespaces
filenames=$(echo $filenames | xargs)

jq -n --arg filenames "${filenames}" '{
    "photos": $filenames | split(" "),
    "thumbnails": "thumbnails"
}' > $dst_dir/photos.index.json
