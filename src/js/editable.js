// Possible solution to onChange event for contenteditable http://jsfiddle.net/MBags/
import Emitter from 'es6-event-emitter'

import { default as contentHelper } from './helpers/contentHelper'

class Editable {
  constructor () {
    // super()

    this.regions = contentHelper.findRegions()
    this.content = {
      prev: [],
      next: []
    }
    this.isEditing = false
  }

  enableEdit () {
    if (this.isEditing) throw new Error('Editing is already enabled.')

    contentHelper.addContentEditable(this.regions)
    contentHelper.addListeners(this.regions)
    this.content.prev = contentHelper.getContent(this.regions)
    this.isEditing = true
    // this.trigger('enableEdit')
  }

  disableEdit () {
    if (!this.isEditing) throw new Error('Editing is already disabled.')

    contentHelper.removeContentEditable(this.regions)
    contentHelper.removeListeners(this.regions)
    this.content.next = contentHelper.getContent(this.regions)
    this.isEditing = false
    // this.trigger('disableEdit')
  }

  save () {
    if (!this.isEditing) throw new Error('Cannot save while not editing.')
    this.disableEdit()

    let changedContent = this.content.next.filter((next, index) => {
      return next.content !== this.content.prev[index].content
    })

    return changedContent
    // this.trigger('save', changedContent) // Should also expect callback?
  }

  cancel () {
    if (!this.isEditing) throw new Error('Cannot cancel while not editing')
    this.disableEdit()

    for (var i = 0; i < this.regions.length; i++) {
      this.regions[i].innerText = this.content.prev[i].content
    }

    // this.trigger('cancel') // Should also expect callback?
  }
}

exports = module.exports = Editable
