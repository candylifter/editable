import Emitter from 'es6-event-emitter'
import toastr from 'toastr'

toastr.options.positionClass = 'toast-bottom-center'

import Editable from 'editable'

import 'styles'

class Editor extends Emitter {
  constructor () {
    super()

    this.editable = new Editable()
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
        this.edit()
      })
      return fab
    })()

    this.FABSave = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--save')
      fab.addEventListener('click', (e) => {
        this.save()
      })
      return fab
    })()

    this.FABCancel = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--cancel')
      fab.addEventListener('click', (e) => {
        this.cancel()
      })
      return fab
    })()

    this.FABBusy = (() => {
      let fab = document.createElement('button')
      fab.classList.add('editor-fab')
      fab.classList.add('editor-fab--busy')
      return fab
    })()

    this.isEditing = false

    this.on('busy', () => {
      while (this.FABContainer.firstChild) {
        this.FABContainer.removeChild(this.FABContainer.firstChild)
      }

      this.FABContainer.appendChild(this.FABBusy)
    })

    this.on('ready', () => {
      while (this.FABContainer.firstChild) {
        this.FABContainer.removeChild(this.FABContainer.firstChild)
      }

      this.FABContainer.appendChild(this.FABEdit)
    })

    this.on('success', (message = 'Successfully saved new content') => {
      toastr.success(message)
    })

    this.on('error', (message = 'Error occured while saving new content, please try again later') => {
      toastr.error(message)
    })

    this.trigger('ready')
  }

  edit () {
    while (this.FABContainer.firstChild) {
      this.FABContainer.removeChild(this.FABContainer.firstChild)
    }

    this.isEditing = true
    this.editable.enableEdit()

    this.FABContainer.appendChild(this.FABSave)
    this.FABContainer.appendChild(this.FABCancel)

    this.trigger('edit')
  }

  save () {
    while (this.FABContainer.firstChild) {
      this.FABContainer.removeChild(this.FABContainer.firstChild)
    }

    let changedContent = this.editable.save()

    this.FABContainer.appendChild(this.FABEdit)
    this.trigger('save', changedContent)
  }

  cancel () {
    while (this.FABContainer.firstChild) {
      this.FABContainer.removeChild(this.FABContainer.firstChild)
    }

    this.editable.cancel()

    this.FABContainer.appendChild(this.FABEdit)
    this.trigger('cancel')
  }
}

exports = module.exports = Editor
