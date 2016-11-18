import expect from 'expect'
import $ from 'jquery'

import Editable from 'editable'

describe('Editable', () => {

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
    expect(Editable).toExist()
  })

  describe('initialization', () => {
    it('should find elements with \'data-editable\' attribute', () => {
      let editable = new Editable()

      let expectedRegions = document.querySelectorAll('[data-editable]')
      let actualRegions = editable.regions

      expect(actualRegions).toEqual(expectedRegions)
    })
  })

  describe('enableEdit', () => {
    it('should add \'contenteditable\' attribute to regions', () => {
      let editable = new Editable()
      editable.enableEdit()

      for (var i = 0; i < editable.regions.length; i++) {
        let hasAttribute = !!$(editable.regions[i]).attr('contenteditable')
        expect(hasAttribute).toBe(true)
      }
    })

    it('should set isEditing to true', () => {
      let editable = new Editable()
      editable.enableEdit()

      expect(editable.isEditing).toBe(true)
    })
  })

  describe('disableEdit', () => {
    it('should remove \'contenteditable\' attribute from regions', () => {
      let editable = new Editable()
      editable.enableEdit()
      editable.disableEdit()

      let editableElements = document.querySelectorAll('[contenteditable]')

      expect(editableElements.length).toBe(0)
    })

    it('should set isEditing to false', () => {
      let editable = new Editable()
      editable.enableEdit()
      editable.disableEdit()

      expect(editable.isEditing).toBe(false)
    })
  })

  describe('save', () => {
    it('should return changed objects on save event', () => {
      let editable = new Editable()
      editable.enableEdit()

      $('h2').text('Test')

      let expectedList = [{
        name: 'heading',
        content: 'Test'
      }]

      let contentList = editable.save()

      expect(contentList).toEqual(expectedList)
    })
  })

  describe('cancel', () => {
    it('should revert content changes on cancel', () => {
      let editable = new Editable()
      editable.enableEdit()

      $('h2').text('Test')

      editable.cancel()

      let expectedContent = 'Heading 2'
      let actualContent = $('h2').text()

      expect(actualContent).toBe(expectedContent)
    })
  })
})
