// Get all elements with 'data-editable'
// Add tooltip which allows toggling between read and edit mode
// Bind onClick to enable contenteditable on tag

class Editor {
  constructor () {
    this.state = {
      editableElements: []
    }
  }

  init () {
    let editableElements = document.querySelectorAll('[data-editable]')
    this.state.editableElements = editableElements

    editableElements.map((element) => console.log(element))
  }
}

let editor = new Editor()

editor.init()
