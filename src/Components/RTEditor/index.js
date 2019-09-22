import React, { useCallback } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const editorConfig = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    '|',
    'insertTable',
    'indent',
    'alignment',
    '|',
    'bulletedList',
    'numberedList',
    'blockQuote',
    '|',
    'undo',
    'redo'
  ],
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1'
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2'
      }
    ]
  }
}

const RTEditor = ({ data = '', RTEProps = {}, onChange }) => {
  const _onChange = useCallback(
    (evt, editor) => {
      const data = editor.getData()
      onChange(data, editor)
    },
    [onChange]
  )

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={data}
        onChange={_onChange}
        {...RTEProps}
      />
    </div>
  )
}

export default RTEditor
