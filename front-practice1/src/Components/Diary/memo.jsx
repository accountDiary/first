import React, { useMemo, useState, useEffect, forwardRef, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomToolbar } from "./CustomToolbar";
import "./QuillEditor.css";
import axios from "axios";

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
  "code-block",
];

const Editor = forwardRef((props, ref) => {
  const {initialValues} = props;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const { values, setValues } =  useState("");
  

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    setDateTime(formattedDate);
  }, []);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);

  const quillRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = quillRef.current;
    }
    console.log("quillRef.current 확인:", quillRef.current);
  }, [ref]);

  // const handleContentChange = (content) => {
  //   if (setValues) {
  //     setValues(content); // 부모 컴포넌트로 Quill Editor의 내용을 전달
  //   }
  // };

  // const handleSubmit = async () => {
  //   console.log("버튼 클릭됨요");
  //   console.log("Submitted credentials:", { title, subtitle, dateTime, values });
    
  //   if (!quillRef.current) {
  //     console.error("Quill Editor가 초기화되지 않았습니다.");
  //     return;
  //   }
  //   try {
  //     const quillContent = quillRef.current.getEditor().root.innerHTML;
  //     console.log("저장할 내용:", quillContent);
  //     // axios 등을 사용하여 서버로 데이터 전송
  //     const posting = await axios.post("/api/savePost", {
  //       title: title,
  //       subtitle: subtitle,
  //       dateTime: dateTime,
  //       content: quillContent,
  //     });
  //     console.log("포스트가 성공적으로 저장되었습니다:", posting.data);
  //   } catch (error) {
  //     console.error("포스트 저장 중 오류 발생:", error);
  //   }
  // };

  return (
    <div className="editor-container">
      <div className="input-group">
        <label className="input-label">
          제목:
          <input
            className="input-field"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label className="input-label">
          부제목:
          <input
            className="input-field"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label className="input-label">
          날짜/시간:
          <input
            className="input-field"
            type="text"
            value={dateTime}
            readOnly
          />
        </label>
      </div>
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={values}
      />
    </div>
  );
});

export default Editor;




