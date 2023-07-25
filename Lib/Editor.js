import React, { useEffect } from "react";
import ReactQuill, { Quill } from "react-quill-with-table";
import ImageResize from "quill-image-resize-module-react";
import { ImageDrop } from "quill-image-drop-module";
import * as QuillTableUI from "quill-table-ui";
import BlotFormatter from "quill-blot-formatter";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/blotFormatter", BlotFormatter);
Quill.register(
  {
    "modules/tableUI": QuillTableUI.default,
  },
  true
);

class CustomQuill extends ReactQuill {
  destroyEditor() {
    if (!this.editor) return;
    this.unhookEditor(this.editor);
  }

  instantiateEditor() {
    if (this.editor) {
      this.hookEditor(this.editor);
    }
    super.instantiateEditor();
  }
}

/** Simple editor component that takes placeholder text as a prop*/
let quillEl;
let allProp;
const Editor = (props) => {
  useEffect(() => {
    quillEl.editor.root.addEventListener('paste', (e) => {
      const ops = quillEl.lastDeltaChangeSet.ops || [];
      const url = ops.find(v => (v?.insert) ? v.insert : false).insert
      //   console.log(quillEl.lastDeltaChangeSet.ops[0]?.insert);
      
      const isUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      //   console.log(!isUrl.test(url));
      if (!isUrl.test(url)) {
        console.log(url)
        return alert("Url không hợp lệ");
      }
  
      const isImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
        new URL(url).pathname
      );
  
      if (isImage) {
        quillEl.focus();
  
        const range = quillEl.getEditorSelection();
  
        quillEl.getEditor().insertEmbed(range.index, "image", url);
      } else {
        alert(`url không hợp lệ ${url}`);
      }

      return true
    })
    allProp = props;
  }, [props]);

  const changedContent = () => {
  
  };

  return (
    <>
      <CustomQuill
        ref={(el) => {
          quillEl = el;
        }}
        onChange={changedContent}
        value={props.value}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={"#editor-parent"}
        placeholder={props.placeholder}
        theme="snow"
      />
    </>
  );
};

Editor.modules = {
  table: true,
  tableUI: true,
  toolbar: {
    handlers: {
      link: async () => {
        allProp.field.setFieldShow(true);
        allProp.field.title.setFieldTitle("Nhập url ảnh vào đây");
        allProp.field.inputBtn.cancelBtn.current.onclick = () => {
          allProp.field.setFieldShow(false);
        };
        allProp.field.inputBtn.saveBtn.current.onclick = () => {
          console.log(allProp.field.fieldEl.current.value);
          const url = allProp.field.fieldEl.current.value;
          const isUrl =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

          if (!isUrl.test(url)) return alert("Url không hợp lệ");

          const isImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
            new URL(url).pathname
          );

          if (isImage) {
            quillEl.focus();

            const range = quillEl.getEditorSelection();

            quillEl.getEditor().insertEmbed(range.index, "image", url);
          } else {
            alert(`url không hợp lệ ${url}`);
          }
        };
      },
    },
    container: [
      [
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5, 6] },
        { font: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "video", "image"],
      ["clean"],
      ["code-block"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }, { table: true }],
    ],
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
  imageDrop: true,
  blotFormatter: {},
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",

  "color",

  "align",
  "direction",
  "indent",
  "background",
  "script",
  "table",
];

export default Editor;
