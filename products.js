/* global fetch */

'use strict'

const animationDuration = 200
const productsPromise = fetch('products.json').then((res) => res.json())

let currentlySelectedIndex = null
let products = null
let working = false

window.startApp = function () {
  productsPromise.then((_products) => {
    products = _products
    render()
  })
}

function render () {
  const target = document.getElementById('product-container')
  products.forEach(function (product, index) {
    const item = document.createElement('div')
    const title = document.createElement('h3')
    item.className = 'item'
    item.id = index
    item.style.backgroundImage = 'url(assets/img/' + product.images[0] + ')'
    item.addEventListener('click', function () {
      openProduct(index, product)
    })
    title.innerHTML = product.title
    item.appendChild(title)
    target.appendChild(item)
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
  const row = document.createElement('div')
  const sizeElement = document.createElement('h1')
  const titleElement = document.createElement('h1')
  const imageContainer = document.createElement('div')
  const buttonContainer = document.createElement('div')

  divider.id = 'divider'
  row.className = 'row'
  sizeElement.innerHTML = 'Storlek ' + product.size
  titleElement.innerHTML = product.title
  imageContainer.id = 'imageContainer'
  imageContainer.style.width = product.images.length * 100 + '%'
  buttonContainer.id = 'buttonContainer'

  row.appendChild(titleElement)
  row.appendChild(sizeElement)
  divider.appendChild(imageContainer)
  divider.appendChild(row)

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
  divider.appendChild(buttonContainer)

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

function slideshow (index) {
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
