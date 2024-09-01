---
title: "k8s secret shinanigans"
date: 2023-12-25
tags:
  - k8s
  - yaml
  - yml
layout: layouts/post.njk
---

> \*checks dates\* So... took a while to write this one? I am going to chalk it to being busy at my jobby job.

According to the [official documentation](https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/secret-v1/#Secret), k8s secrets needs to be base64 encoded. 

So below is a no no:

```yaml
# do **NOT** do this!
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  FAV_FOOD: PIE
```

Of course, linux comes with `base64` utilities, and if you do:

```bash
echo "pie" | base64 # prints cGllCg==
```

... and tried ...

```yaml
# do **NOT** do this!
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  FAV_FOOD: cGllCg==
```

You might be in for a rude awakening, too, since this includes a new line character. 

Lastly, I tried ...

```bash
echo -n "pie" | base64 # prints cGll
```

So ...

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  FAV_FOOD: cGll
```

... should work. 

