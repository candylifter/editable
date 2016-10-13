// Possible solution to onChange event for contenteditable http://jsfiddle.net/MBags/

import 'styles'

export class Editor {
  constructor () {
    this.state = {
      regions: undefined,
      prevContent: undefined,
      nextContent: undefined,
      isEditing: false
    }

    this.enableEdit = this.enableEdit.bind(this)
    this.disableEdit = this.disableEdit.bind(this)
    this.handleFabClick = this.handleFabClick.bind(this)
  }

  findRegions () {
    this.state.regions = document.querySelectorAll('[data-editable]')
  }

  handleSave () {
    let { prevContent, nextContent } = this.state

    let changedContent = nextContent.filter((next, index) => {
      return next.content !== prevContent[index].content
    })

    console.log(JSON.stringify(changedContent))
  }

  handleFabClick (e) {
    let { isEditing } = this.state

    if (isEditing) {
      e.target.classList.remove('editor-fab--save')
      this.disableEdit()
      this.updateNextContent()
      this.handleSave()
    } else {
      e.target.classList.add('editor-fab--save')
      this.enableEdit()
      this.updatePrevContent()
    }
  }

  updatePrevContent () {
    let { regions } = this.state

    let prev = []

    for (var i = 0; i < regions.length; i++) {
      let prevContent = {
        name: regions[i].dataset.name,
        content: regions[i].innerText
      }

      prev.push(prevContent)
    }

    this.state.prevContent = prev
  }

  updateNextContent () {
    let { regions } = this.state

    let next = []

    for (var i = 0; i < regions.length; i++) {
      let nextContent = {
        name: regions[i].dataset.name,
        content: regions[i].innerText
      }

      next.push(nextContent)
    }

    this.state.nextContent = next
  }

  enableEdit () {
    let { regions } = this.state

    for (var i = 0; i < regions.length; i++) {
      regions[i].setAttribute('contenteditable', true)
    }

    this.state.isEditing = true
  }

  disableEdit () {
    let { regions } = this.state

    for (var i = 0; i < regions.length; i++) {
      regions[i].removeAttribute('contenteditable')
    }

    this.state.isEditing = false
  }

  addFab () {
    let fab = document.createElement('div')
    fab.classList.add('editor-fab')
    fab.addEventListener('click', this.handleFabClick, false)

    document.body.appendChild(fab)
  }

  init () {
    this.findRegions()

    if (this.state.regions.length > 0) {
      this.addFab()
    }
  }
}