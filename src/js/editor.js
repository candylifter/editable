import Emitter from 'es6-event-emitter'
import toastr from 'toastr'

import Editable from 'editable'
import 'styles'

toastr.options.positionClass = 'toast-bottom-center'

const createFAB = () => {
  let fab = document.createElement('button')
  fab.classList.add('editor-fab')
  return fab
}

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
      let fab = createFAB()
      fab.classList.add('editor-fab--edit')
      fab.addEventListener('click', (e) => this.edit())
      return fab
    })()

    this.FABSave = (() => {
      let fab = createFAB()
      fab.classList.add('editor-fab--save')
      fab.addEventListener('click', (e) => this.save())
      return fab
    })()

    this.FABCancel = (() => {
      let fab = createFAB()
      fab.classList.add('editor-fab--cancel')
      fab.addEventListener('click', (e) => this.cancel())
      return fab
    })()

    this.FABBusy = (() => {
      let fab = createFAB()
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
    if (this.isEditing) throw new Error('Already in editing mode')

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
    if (!this.isEditing) throw new Error('Cannot save while not in editing mode')

    while (this.FABContainer.firstChild) {
      this.FABContainer.removeChild(this.FABContainer.firstChild)
    }

    let changedContent = this.editable.save()
    this.isEditing = false

    this.FABContainer.appendChild(this.FABEdit)
    this.trigger('save', changedContent)
  }

  cancel () {
    if (!this.isEditing) throw new Error('Cannot cancel while not in editing mode')

    while (this.FABContainer.firstChild) {
      this.FABContainer.removeChild(this.FABContainer.firstChild)
    }

    this.editable.cancel()
    this.isEditing = false

    this.FABContainer.appendChild(this.FABEdit)
    this.trigger('cancel')
  }
}

exports = module.exports = Editor
