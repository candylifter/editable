/* global Editor */

var editor = new Editor()

editor.on('save', function (data) {
  console.log('save event.')
  console.log(data)
})

editor.on('cancel', function () {
  console.log('cancel event')
})
