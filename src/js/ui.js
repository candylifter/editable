import Emitter from 'es6-event-emitter'
import Editor from 'editor'

import 'styles'

class UI extends Emitter {
  constructor () {
    super()

    this.editor = new Editor()
    this.FABContainer = (() => {
      let container = document.createElement('div')
      container.classList.add('editor')
      document.body.appendChild(container)
      return container
    })()

    this.FABEdit = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--edit')
      fab.addEventListener('click', (e) => {
        this.trigger('edit')
      })
      return fab
    })()

    this.FABSave = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--save')
      fab.addEventListener('click', (e) => {
        this.trigger('save')
      })
      return fab
    })()

    this.FABCancel = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--cancel')
      fab.addEventListener('click', (e) => {
        this.trigger('cancel')
      })
      return fab
    })()

    this.isEditing = false

    this.FABContainer.appendChild(this.FABEdit)

    this.on('edit', () => {
      while (this.FABContainer.firstChild) {
        this.FABContainer.removeChild(this.FABContainer.firstChild)
      }

      this.isEditing = true
      this.editor.enableEdit()

      this.FABContainer.appendChild(this.FABSave)
      this.FABContainer.appendChild(this.FABCancel)
    })

    this.on('save', () => {
      while (this.FABContainer.firstChild) {
        this.FABContainer.removeChild(this.FABContainer.firstChild)
      }

      this.editor.save()

      this.FABContainer.appendChild(this.FABEdit)
    })

    this.on('cancel', () => {
      while (this.FABContainer.firstChild) {
        this.FABContainer.removeChild(this.FABContainer.firstChild)
      }

      this.editor.cancel()

      this.FABContainer.appendChild(this.FABEdit)
    })
  }

  edit () {

  }

  save () {

  }

  cancel () {
    
  }
}

exports = module.exports = UI
