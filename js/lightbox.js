(async () => {
  
  const rootUrl = 'https://photos.pandamakes.me'
  const HIDDEN_CLS = 'hidden'
  const THUMB_CLS = 'thumbnail'
  const PHOTO_DS_NAME = 'photofilename'
  const EVENTHANDLER_ADDED = Symbol('EVENTHANDLER_ADDED')
  const MODAL_OPEN = Symbol('MODAL_OPEN')
  const photoMap = new Map()

  const createFigure = (url, altText, photo) => {
    const figureEl = document.createElement('figure')
    figureEl.dataset[PHOTO_DS_NAME] = photo

    const imgEl = document.createElement('img')
    imgEl.dataset[PHOTO_DS_NAME] = photo

    imgEl.src = url
    figureEl.appendChild(imgEl)

    if (!!altText) {
      imgEl.alt = altText
      const caption = document.createElement('figcaption')
      caption.dataset[PHOTO_DS_NAME] = photo
      caption.innerText = altText
      figureEl.appendChild(caption)
    }
    return figureEl
  }

  const openModal = photoDsName => {
    document[MODAL_OPEN] = true
    document.body.classList.add('pm-modal')
    
    const { photo, altText } = photoMap.get(photoDsName)
    const figureEl = createFigure(`${rootUrl}/${photo}`, altText, photo)
    figureEl.classList.add(`lightbox-spotlight`)

    const container = document.createElement('div')
    container.classList.add('lightbox-spotlight-container')
    container.appendChild(figureEl)

    document.body.appendChild(container)
    
    const closeModal = ev => {
      if (ev instanceof KeyboardEvent) {
        if (ev.key !== "Escape") {
          return
        }
      }
      document.body.classList.remove('pm-modal')
      document[MODAL_OPEN] = false
      document.body.removeChild(container)
      document.body.removeEventListener('click', closeModal)
      document.removeEventListener('keydown', closeModal)
    }
    
    document.body.addEventListener('click', closeModal)
    document.addEventListener('keydown', closeModal)
  }


  if (!document[EVENTHANDLER_ADDED]) {
    document.addEventListener('click', ev => {
      const photoDsName = ev.target.dataset[PHOTO_DS_NAME]
      if (!photoDsName) {
        return
      }
      if (!!document[MODAL_OPEN]) {
        return
      }

      openModal(photoDsName)
      
    })
    document[EVENTHANDLER_ADDED] = '1'
  }

  const loadingEls = document.querySelectorAll(".lightbox .loading")
  loadingEls.forEach(el => el.classList.remove(HIDDEN_CLS))
  
  const resp = await fetch(`${rootUrl}/photos.index.json`)
  const jsonObj = await resp.json()

  const thumbnailDir = jsonObj.thumbnails

  /**
   * @type {string[]}
   */
  const photos = jsonObj.photos
  loadingEls.forEach(el => el.classList.add(HIDDEN_CLS))
  
  const getAltText = async filename => {
    const resp = await fetch(`${rootUrl}/${filename}.md`)
    return await resp.text()
  }

  const photoWAlt = await Promise.all(
    photos.map(async photo => {
      try {
        const altText = await getAltText(photo)
        return {
          photo,
          altText
        }
      } catch (e) {
        return {
          photo,
        }
      }
    })
  )

  const carousel = document.querySelector('.lightbox')

  photoMap.clear()
  for (const { photo, altText } of photoWAlt){
    photoMap.set(photo, { photo, altText })
    const figureEl = createFigure(`${rootUrl}/${thumbnailDir}/${photo}`, altText, photo)
    figureEl.classList.add(THUMB_CLS)
    carousel.append(figureEl)
  }

})()
