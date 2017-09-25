/* global fetch */

'use strict'

const animationDuration = 200
const productsPromise = fetch('products.json').then((res) => res.json())

let currentlySelectedIndex = null
let products = null
let working = false
let sliderIndex = 0

window.startApp = function () {
  productsPromise.then((_products) => {
    products = _products
    render()
  })
}

function render () {
  const target = document.getElementById('product-container')
  products.forEach(function (product, index) {
    const itemElement = document.createElement('div')
    const titleElement = document.createElement('h3')
    const sizeElement = document.createElement('h3')
    const oldPriceElement = document.createElement('h3')
    const priceElement = document.createElement('h3')

    itemElement.className = 'item'
    itemElement.id = index
    itemElement.style.backgroundImage = 'url(assets/img/' + product.images[0] + ')'
    itemElement.addEventListener('click', function () {
      openProduct(index, product)
    })
    titleElement.textContent = product.title
    sizeElement.textContent = product.size
    oldPriceElement.textContent = product.oldPrice
    oldPriceElement.className = 'oldPriceTag'
    priceElement.textContent = product.price
    priceElement.className = 'priceTag'
    itemElement.appendChild(titleElement)
    itemElement.appendChild(sizeElement)
    if (product.oldPrice != null) {
      itemElement.appendChild(oldPriceElement)
    }
    if (product.price != null) {
      itemElement.appendChild(priceElement)
    }
    target.appendChild(itemElement)
  })
}

function openProduct (index, product) {
  if (working) return

  working = true

  function done () {
    working = false
  }

  if (currentlySelectedIndex === index) {
    closeProduct(currentlySelectedIndex, done)
    currentlySelectedIndex = null
  } else if (currentlySelectedIndex === null) {
    info(index, product, done)
    currentlySelectedIndex = index
  } else {
    closeProduct(currentlySelectedIndex, function () {
      info(index, product, done)
      currentlySelectedIndex = index
    })
  }
  sliderIndex = 0
}

function info (index, product, cb) {
  const containerWidth = document.getElementById('product-container').offsetWidth

  let elementsPerRow
  let placement
  let target

  if (containerWidth < 520) {
    elementsPerRow = 1
  } else if (containerWidth < 780) {
    elementsPerRow = 2
  } else if (containerWidth < 1040) {
    elementsPerRow = 3
  } else {
    elementsPerRow = 4
  }

  placement = (Math.floor(index / elementsPerRow) * elementsPerRow) + elementsPerRow
  if (placement > products.length) {
    placement = products.length
  }

  if (placement === products.length) {
    target = document.getElementById(placement - 1)
  } else {
    target = document.getElementById(placement)
  }

  const divider = document.createElement('div')
  const imageContainer = document.createElement('div')
  const overlayContainer = document.createElement('div')
  const row = document.createElement('div')
  const titleElement = document.createElement('h1')
  const sizeElement = document.createElement('h1')
  const priceElement = document.createElement('h1')
  const oldPriceElement = document.createElement('h1')
  const buttonContainer = document.createElement('div')
  const arrowContainer = document.createElement('div')
  const leftArrow = document.createElement('a')
  const leftArrowIcon = document.createElement('i')
  const rightArrow = document.createElement('a')
  const rightArrowIcon = document.createElement('i')

  divider.id = 'divider'
  overlayContainer.id = 'overlayContainer'
  row.className = 'row'
  titleElement.textContent = product.title
  sizeElement.textContent = 'Storlek ' + product.size
  priceElement.textContent = product.price
  priceElement.className = 'priceTag'
  oldPriceElement.textContent = product.oldPrice
  oldPriceElement.className = 'oldPriceTag'
  imageContainer.id = 'imageContainer'
  imageContainer.style.width = product.images.length * 100 + '%'
  buttonContainer.id = 'buttonContainer'
  arrowContainer.id = 'arrowContainer'
  leftArrow.addEventListener('click', function () {
    slideshowArrow('left')
  })
  rightArrow.addEventListener('click', function () {
    slideshowArrow('right')
  })
  leftArrowIcon.className = 'fa fa-3x fa-angle-left'
  rightArrowIcon.className = 'fa fa-3x fa-angle-right'

  row.appendChild(titleElement)
  row.appendChild(sizeElement)
  row.appendChild(oldPriceElement)
  row.appendChild(priceElement)
  divider.appendChild(imageContainer)
  overlayContainer.appendChild(row)
  leftArrow.appendChild(leftArrowIcon)
  arrowContainer.appendChild(leftArrow)
  rightArrow.appendChild(rightArrowIcon)
  arrowContainer.appendChild(rightArrow)
  overlayContainer.appendChild(arrowContainer)
  divider.appendChild(overlayContainer)

  product.images.forEach(function (image, imageIndex) {
    const imageElement = document.createElement('div')
    const imageButton = document.createElement('a')

    imageElement.style.backgroundImage = 'url(assets/img/' + image + ')'
    imageElement.className = 'image'
    imageButton.addEventListener('click', function () {
      slideshow(imageIndex)
    })

    imageContainer.appendChild(imageElement)
    buttonContainer.appendChild(imageButton)
  })
  overlayContainer.appendChild(buttonContainer)

  if (placement === products.length) {
    target.parentNode.appendChild(divider)
  } else {
    target.parentNode.insertBefore(divider, target)
  }

  document.getElementById(index).classList.add('selected')

  setTimeout(cb, animationDuration)
}

function closeProduct (index, cb) {
  const element = document.getElementById('divider')

  element.className = 'closed'

  setTimeout(function () {
    element.parentNode.removeChild(element)
    document.getElementById(index).classList.remove('selected')
    cb()
  }, animationDuration)
}

function slideshowArrow (direction) {
  if (direction === 'right') {
    const numberOfImages = products[currentlySelectedIndex].images.length - 1
    if (sliderIndex < numberOfImages) {
      slideshow(sliderIndex + 1)
    }
  } else if (direction === 'left') {
    if (sliderIndex > 0) {
      slideshow(sliderIndex - 1)
    }
  }
}

function slideshow (index) {
  sliderIndex = index
  const imageContainer = document.getElementById('imageContainer')
  const imageLenght = imageContainer.childNodes[0].offsetWidth
  const position = imageLenght * index

  imageContainer.style.transform = 'translateX(-' + position + 'px)'

  const buttonContainer = document.getElementById('buttonContainer')
  buttonContainer.childNodes.forEach(function (child) {
    child.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  })
  buttonContainer.childNodes[index].style.backgroundColor = '#fff'
}
