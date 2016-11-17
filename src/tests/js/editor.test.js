import expect from 'expect'
import $ from 'jquery'

import Editor from 'editor'

describe('Editor', () => {

  let dummyDOM = `
    <h1>Heading 1</h1>
    <h2 data-editable data-name="heading">Heading 2</h2>
    <span data-editable data-name="paragraph">Span</span>
  `

  beforeEach(() => {
    $('body').empty()
    $('body').append(dummyDOM)
  })

  it('should exist', () => {
    expect(Editor).toExist()
  })

  describe('initialization', () => {
    it('should find elements with \'data-editable\' attribute', () => {
      let editor = new Editor()

      let expectedRegions = document.querySelectorAll('[data-editable]')
      let actualRegions = editor.regions

      expect(actualRegions).toEqual(expectedRegions)
    })
  })

  // describe('addFab', () => {
  //   it('should add fab to DOM', () => {
  //     let editor = new Editor()
  //     editor.addFab()
  //
  //     let $fab = $('.editor-fab')
  //     expect($fab).toExist()
  //   })
  // })

  describe('enableEdit', () => {
    it('should emit \'enableEdit\' event', function (done) {
      this.timeout(1000) // timeout with an error if done() isn't called within one second

      let editor = new Editor()

      editor.on('enableEdit', () => {
        done()
      })

      editor.enableEdit()
    })

    it('should add \'contenteditable\' attribute to regions', () => {
      let editor = new Editor()
      editor.enableEdit()

      for (var i = 0; i < editor.regions.length; i++) {
        let hasAttribute = !!$(editor.regions[i]).attr('contenteditable')
        expect(hasAttribute).toBe(true)
      }
    })

    it('should set isEditing to true', () => {
      let editor = new Editor()
      editor.enableEdit()

      expect(editor.isEditing).toBe(true)
    })
  })

  describe('disableEdit', () => {
    it('should emit \'disableEdit\' event', function (done) {
      this.timeout(1000) // timeout with an error if done() isn't called within one second

      let editor = new Editor()
      editor.enableEdit()

      editor.on('disableEdit', () => {
        done()
      })

      editor.disableEdit()
    })

    it('should remove \'contenteditable\' attribute from regions', () => {
      let editor = new Editor()
      editor.enableEdit()
      editor.disableEdit()

      let editableElements = document.querySelectorAll('[contenteditable]')

      expect(editableElements.length).toBe(0)
    })

    it('should set isEditing to false', () => {
      let editor = new Editor()
      editor.enableEdit()
      editor.disableEdit()

      expect(editor.isEditing).toBe(false)
    })
  })

  describe('save', () => {
    it('should emit \'save\' event', function (done) {
       this.timeout(1000) // timeout with an error if done() isn't called within one second

       let editor = new Editor()
       editor.enableEdit()

       editor.on('save', () => {
         done()
       })

       editor.save()
    })

    it('should return changed objects on save event', () => {
      let editor = new Editor()
      editor.enableEdit()

      $('h2').text('Test')

      let expectedList = [{
        name: 'heading',
        content: 'Test'
      }]

      editor.on('save', (contentList) => {
        expect(contentList).toEqual(expectedList)
      })

      editor.save()
    })
  })

  describe('cancel', () => {
    it('should emit \'cancel\' event', function (done) {
      this.timeout(1000) // timeout with an error if done() isn't called within one second

      let editor = new Editor()
      editor.enableEdit()

      editor.on('cancel', () => {
        done()
      })

      editor.cancel()
    })

    it('should revert content changes on cancel', () => {
      let editor = new Editor()
      editor.enableEdit()

      $('h2').text('Test')

      editor.cancel()

      let expectedContent = 'Heading 2'
      let actualContent = $('h2').text()

      expect(actualContent).toBe(expectedContent)
    })
  })
})
