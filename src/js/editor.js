// Possible solution to onChange event for contenteditable http://jsfiddle.net/MBags/

import 'styles'

export class Editor {
  constructor () {
    this.state = {
      regions: document.querySelectorAll('[data-editable]'),
      isEditing: false,
      isPosting: false
    }
  }

  enableEdit (element) {
    element.setAttribute('contenteditable', true)
  }

  disableEdit (element) {
    element.setAttribute('contenteditable', false)
  }

  createFab () {
    let fab = document.createElement('div')
    fab.classList.add('editor-fab')

    document.body.appendChild(fab)
  }

  init () {
    let { regions } = this.state

    this.enableEdit(regions[0])
    this.createFab()
  }
}

let editor = new Editor()
editor.init()
