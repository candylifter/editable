const findRegions = () => document.querySelectorAll('[data-editable]')
const getContent = (regions = []) => {
  let currentContentList = []

  for (var i = 0; i < regions.length; i++) {
    let currentContent = {
      name: regions[i].dataset.name,
      content: regions[i].innerText
    }

    currentContentList.push(currentContent)
  }

  return currentContentList
}

const addContentEditable = (regions) => {
  for (var i = 0; i < regions.length; i++) {
    regions[i].setAttribute('contenteditable', true)
  }
}

const removeContentEditable = (regions) => {
  for (var i = 0; i < regions.length; i++) {
    regions[i].removeAttribute('contenteditable')
  }
}

// Disable enter key when editing to prevent additional element creation
const disableEnterKey = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault()
  }
}

const addListeners = (regions) => {
  for (var i = 0; i < regions.length; i++) {
    let enableEnterKey = regions[i].dataset.enableEnterKey || false

    if (!enableEnterKey) {
      regions[i].addEventListener('keypress', disableEnterKey)
    }
  }
}

const removeListeners = (regions) => {
  for (var i = 0; i < regions.length; i++) {
    regions[i].removeEventListener('keypress', disableEnterKey)
  }
}

export default {
  findRegions,
  getContent,
  addContentEditable,
  removeContentEditable,
  addListeners,
  removeListeners
}
