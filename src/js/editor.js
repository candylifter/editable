// Possible solution to onChange event for contenteditable http://jsfiddle.net/MBags/
import Emitter from 'es6-event-emitter'
import 'styles'


// Move to helpers
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
    regions[i].addEventListener('keypress', disableEnterKey)
  }
}

const removeListeners = (regions) => {
  for (var i = 0; i < regions.length; i++) {
    regions[i].removeEventListener('keypress', disableEnterKey)
  }
}

class Editor extends Emitter {
  constructor () {
    super()

    this.regions = findRegions()
    this.content = {
      prev: [],
      next: []
    }
    this.isEditing = false
  }

  enableEdit () {
    if (this.isEditing) throw new Error('Editing is already enabled.')

    addContentEditable(this.regions)
    addListeners(this.regions)
    this.content.prev = getContent(this.regions)
    this.isEditing = true
    this.trigger('enableEdit')
  }

  disableEdit () {
    if (!this.isEditing) throw new Error('Editing is already disabled.')

    removeContentEditable(this.regions)
    removeListeners(this.regions)
    this.content.next = getContent(this.regions)
    this.isEditing = false
    this.trigger('disableEdit')
  }

  save () {
    if (!this.isEditing) throw new Error('Cannot save while not editing.')
    this.disableEdit()

    let changedContent = this.content.next.filter((next, index) => {
      return next.content !== this.content.prev[index].content
    })

    this.trigger('save', changedContent) // Should also expect callback?
  }

  cancel () {
    if (!this.isEditing) throw new Error('Cannot cancel while not editing')

    for (var i = 0; i < this.regions.length; i++) {
      this.regions[i].innerText = this.content.prev[i].content
    }

    this.trigger('cancel') // Should also expect callback?
  }
}

// class Editor extends Emitter {
//   constructor () {
//     super()
//
//     this.state = {
//       regions: undefined,
//       prevContent: undefined,
//       nextContent: undefined,
//       isEditing: false
//     }
//
//     this.enableEdit = this.enableEdit.bind(this)
//     this.disableEdit = this.disableEdit.bind(this)
//     this.handleFabClick = this.handleFabClick.bind(this)
//     this.bindCancelEvents = this.bindCancelEvents.bind(this)
//     this.save = this.save.bind(this)
//     this.cancel = this.cancel.bind(this)
//   }
//
//   findRegions () {
//     this.state.regions = document.querySelectorAll('[data-editable]')
//   }
//
//   save () {
//     if (this.state.isEditing) {
//       this.disableEdit()
//       this.updateNextContent()
//       let { prevContent, nextContent } = this.state
//
//       let changedContent = nextContent.filter((next, index) => {
//         return next.content !== prevContent[index].content
//       })
//
//       this.state.prevContent = nextContent
//
//       this.trigger('save', changedContent)
//     } else {
//       throw new Error('Cannot save while not in editing mode')
//     }
//   }
//
//   cancel () {
//     if (this.state.isEditing) {
//       this.disableEdit()
//       this.nextContent = undefined
//
//       let { regions, prevContent } = this.state
//
//       for (var i = 0; i < regions.length; i++) {
//         regions[i].innerText = prevContent[i].content
//       }
//
//       this.trigger('cancel')
//     } else {
//       throw new Error('Cannot cancel while not in editing mode')
//     }
//   }
//
//   bindCancelEvents () {
//     document.body.addEventListener('keyup', (e) => {
//       if (this.state.isEditing && e.keyCode === 27) {
//         this.cancel()
//       }
//     })
//   }
//
//   handleFabClick (e) {
//     let { isEditing } = this.state
//
//     if (isEditing) {
//       e.target.classList.remove('editor-fab--save')
//       this.save()
//     } else {
//       e.target.classList.add('editor-fab--save')
//       this.enableEdit()
//       this.bindCancelEvents()
//       this.updatePrevContent()
//     }
//   }
//
//   updatePrevContent () {
//     let { regions } = this.state
//
//     let prev = []
//
//     for (var i = 0; i < regions.length; i++) {
//       let prevContent = {
//         name: regions[i].dataset.name,
//         content: regions[i].innerText
//       }
//
//       prev.push(prevContent)
//     }
//
//     this.state.prevContent = prev
//   }
//
//   updateNextContent () {
//     let { regions } = this.state
//
//     let next = []
//
//     for (var i = 0; i < regions.length; i++) {
//       let nextContent = {
//         name: regions[i].dataset.name,
//         content: regions[i].innerText
//       }
//
//       next.push(nextContent)
//     }
//
//     this.state.nextContent = next
//   }
//
//   enableEdit () {
//     let { regions } = this.state
//
//     for (var i = 0; i < regions.length; i++) {
//       let type = regions[i].getAttribute('data-editable-type') || 'text'
//
//       switch (type) {
//         case 'text':
//           regions[i].setAttribute('contenteditable', true)
//           break
//         // case 'image':
//         //   let changeImageButton = document.createElement('button')
//         //
//         //   regions[i].classList.add('editor-image')
//         //   changeImageButton.classList.add('editor-image__edit')
//         //   regions[i].appendChild(changeImageButton)
//         //   break
//       }
//     }
//
//     this.state.isEditing = true
//   }
//
//   disableEdit () {
//     let { regions } = this.state
//
//     for (var i = 0; i < regions.length; i++) {
//       let type = regions[i].getAttribute('data-editable-type') || 'text'
//
//       switch (type) {
//         case 'text':
//           regions[i].removeAttribute('contenteditable')
//           break
//         // case 'image':
//         //   let changeImageButton = regions[i].getElementsByClassName('editor-image__edit')[0]
//         //
//         //   regions[i].classList.remove('editor-image')
//         //   regions[i].removeChild(changeImageButton)
//         //   break
//       }
//     }
//
//     this.state.isEditing = false
//   }
//
//   addFab () {
//     let fab = document.createElement('button')
//     fab.classList.add('editor-fab')
//     fab.addEventListener('click', this.handleFabClick, false)
//
//     document.body.appendChild(fab)
//   }
//
//   init () {
//     this.findRegions()
//
//     if (this.state.regions.length > 0) {
//       this.addFab()
//     }
//   }
// }

exports = module.exports = Editor
