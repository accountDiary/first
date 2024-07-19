import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomToolbar } from "./CustomToolbar";
import "./QuillEditor.css";

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
  "size",
  "h1",
  "image",
  "video",
  "width",
  "code-block",
];

const Editor = ({ content, setContent, quillRef }) => {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);

  return (
    <div className="editor-container">
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
      />
    </div>
  );
};

export default Editor;
