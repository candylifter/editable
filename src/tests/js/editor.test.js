import expect from 'expect'
import $ from 'jquery'

import Editor from 'editor'

describe('Editor', () => {
  beforeEach(() => {
    $('body').empty()
  })

  it('should exist', () => {
    expect(Editor).toExist()
  })
  describe('initialization', () => {
    it('should create an instance of Editable', () => {
      let editor = new Editor()

      expect(editor.editable).toExist()
    })

    it('should create FABContainer', () => {
      let editor = new Editor()

      expect(editor.FABContainer).toExist()
    })

    it('should add FABContainer to body', () => {
      let editor = new Editor()
      let fabContainer = $('body').find('.editor')

      expect(fabContainer.length).toBe(1)
    })

    it('should create FABEdit', () => {
      let editor = new Editor()

      expect(editor.FABEdit).toExist()
    })

    it('should add FABEdit to FABContainer', () => {
      let editor = new Editor()
      let FABEdit = $('.editor').find('.editor-fab--edit')

      expect(FABEdit.length).toBe(1)
    })

    it('should set isEditing to false', () => {
      let editor = new Editor()

      expect(editor.isEditing).toBe(false)
    })
  })

  describe('edit', () => {
    it('should trigger \'edit\' event', function (done) {
      this.timeout(1000)
      let editor = new Editor()

      editor.on('edit', () => {
        done()
      })

      editor.edit()
    })

    it('should throw when editor is already in editing mode', () => {
      let editor = new Editor()

      editor.edit()
      expect(() => editor.edit()).toThrow('Already in editing mode')
    })

    it('should set isEditing to true', () => {
      let editor = new Editor()

      editor.edit()
      expect(editor.isEditing).toBe(true)
    })

    it('should have FABSave and FABCancel only', () => {
      let editor = new Editor()

      editor.edit()

      let FABCount = $('.editor').find('.editor-fab').length
      let FABSave = $('.editor').find('.editor-fab--save')
      let FABCancel = $('.editor').find('.editor-fab--cancel')

      expect(FABCount).toBe(2)
      expect(FABSave.length).toBe(1)
      expect(FABCancel.length).toBe(1)
    })
  })

  describe('save', () => {
    it('should trigger \'save\' event', function (done) {
      this.timeout(1000)
      let editor = new Editor()

      editor.on('save', () => {
        done()
      })

      editor.edit()
      editor.save()
    })

    it('should throw when editor is not in editing mode', () => {
      let editor = new Editor()

      expect(() => editor.save()).toThrow('Cannot save while not in editing mode')
    })

    it('should have FABEdit only', () => {
      let editor = new Editor()

      editor.edit()
      editor.save()

      let FABCount = $('.editor').find('.editor-fab').length
      let FABEdit = $('.editor').find('.editor-fab--edit')

      expect(FABCount).toBe(1)
      expect(FABEdit.length).toBe(1)
    })
  })

  describe('cancel', () => {
    it('should trigger \'cancel\' event', function (done) {
      this.timeout(1000)
      let editor = new Editor()

      editor.on('cancel', () => {
        done()
      })

      editor.edit()
      editor.cancel()
    })

    it('should throw when editor is not in editing mode', () => {
      let editor = new Editor()

      expect(() => editor.cancel()).toThrow('Cannot cancel while not in editing mode')
    })

    it('should have FABEdit only', () => {
      let editor = new Editor()

      editor.edit()
      editor.cancel()

      let FABCount = $('.editor').find('.editor-fab').length
      let FABEdit = $('.editor').find('.editor-fab--edit')

      expect(FABCount).toBe(1)
      expect(FABEdit.length).toBe(1)
    })
  })
})
