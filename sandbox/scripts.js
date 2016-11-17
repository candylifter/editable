/* global Editor */

var editor = new Editor()

editor.on('save', function (data) {
  editor.trigger('busy')

  setTimeout(function () {
    editor.trigger('ready')
    editor.trigger('success')
    console.log(data)
  }, 300)
})

editor.on('cancel', function () {
  console.log('cancel event')
})
