import expect from 'expect'
import $ from 'jquery'

import { Editor } from 'editor'

describe('Editor', () => {
  beforeEach(() => {
    $('body').empty()
  })

  it('should exist', () => {
    expect(Editor).toExist()
  })

  describe('initialization', () => {
    it('should find elements with \'data-editable\' attribute', () => {
      let html = '<h1>Heading 1</h1><h2 data-editable>Heading 2</h2><span data-editable>Span</span>'
      $('body').append(html)

      let editor = new Editor()
      editor.init()

      let expectedRegions = document.querySelectorAll('[data-editable]')
      let actualRegions = editor.state.regions

      expect(actualRegions).toEqual(expectedRegions)
    })

    it('should add fab if editable elements are found', () => {

    })

    it('should NOT add fab if editable elements are not found', () => {

    })
  })

  describe('addFab', () => {
    it('should add fab to DOM', () => {
      let editor = new Editor()
      editor.addFab()

      let $fab = $('.editor-fab')
      expect($fab).toExist()
    })
  })

  describe('enableEdit', () => {
    it('should add \'contenteditable\' attribute to regions', () => {
      let html = '<h1>Heading 1</h1><h2 data-editable>Heading 2</h2><span data-editable>Span</span>'
      $('body').append(html)

      let editor = new Editor()
      editor.init()
      editor.enableEdit()

      let { regions } = editor.state

      for (var i = 0; i < regions.length; i++) {
        let hasAttribute = !!$(regions[i]).attr('contenteditable')
        expect(hasAttribute).toBe(true)
      }
    })

    it('should set isEditing to true', () => {
      let editor = new Editor()
      editor.init()
      editor.enableEdit()

      let { isEditing } = editor.state
      expect(isEditing).toBe(true)
    })
  })

  describe('disableEdit', () => {
    it('should remove \'contenteditable\' attribute from regions', () => {
      let html = '<h1>Heading 1</h1><h2 data-editable contenteditable="true">Heading 2</h2><span data-editable contenteditable="true">Span</span>'
      $('body').append(html)

      let editor = new Editor()
      editor.init()
      editor.state.isEditing = true

      editor.disableEdit()

      let editableElements = document.querySelectorAll('[contenteditable]')

      expect(editableElements.length).toBe(0)
    })

    it('should set isEditing to false', () => {
      let editor = new Editor()
      editor.init()
      editor.state.isEditing = true
      editor.disableEdit()

      let { isEditing } = editor.state
      expect(isEditing).toBe(false)
    })
  })
})
