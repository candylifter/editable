// Possible solution to onChange event for contenteditable http://jsfiddle.net/MBags/
import { default as contentHelper } from './helpers/contentHelper'

class Editable {
  constructor () {
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
  }

  disableEdit () {
    if (!this.isEditing) throw new Error('Editing is already disabled.')

    contentHelper.removeContentEditable(this.regions)
    contentHelper.removeListeners(this.regions)
    this.content.next = contentHelper.getContent(this.regions)
    this.isEditing = false
  }

  save () {
    if (!this.isEditing) throw new Error('Cannot save while not editing.')
    this.disableEdit()

    let changedContent = this.content.next.filter((next, index) => {
      return next.content !== this.content.prev[index].content
    })

    return changedContent
  }

  cancel () {
    if (!this.isEditing) throw new Error('Cannot cancel while not editing')
    this.disableEdit()

    for (var i = 0; i < this.regions.length; i++) {
      this.regions[i].innerText = this.content.prev[i].content
    }
  }
}

exports = module.exports = Editable
