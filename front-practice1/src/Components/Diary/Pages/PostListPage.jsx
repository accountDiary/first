import React, { useState, useRef, useEffect } from "react";
import Editor from "../Editor.jsx";
import axios from "axios";

const PostListPage = () => {
  const quillRef = useRef(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  //const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [dateTime, setDateTime] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    setDateTime(formattedDate);
  }, []);

  const handleSubmit = async () => {
    console.log("버튼 클릭됨요");
    console.log("Submitted credentials:", {
      content,
      title,
      subtitle,
      dateTime,
    });

    if (!quillRef.current) {
      console.error("Quill Editor가 초기화되지 않았습니다.");
      return;
    }
    try {
      const quillContent = quillRef.current.getEditor().root.innerHTML;
      console.log("저장할 내용:", quillContent);

      // 등록되기 전 현재 시간 다시 설정
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      setDateTime(formattedDate);

      // axios 등을 사용하여 서버로 데이터 전송
      const posting = await axios.post("/api/post/save", {
        title,
        subtitle,
        dateTime,
        content: quillContent,
      });
      console.log("포스트가 성공적으로 저장되었습니다:", posting.data);
    } catch (error) {
      console.error("포스트 저장 중 오류 발생:", error);
    }
  };

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
        <Editor content={content} setContent={setContent} quillRef={quillRef} />
      </div>
      <button onClick={handleSubmit}>등록하기</button>
    </div>
  );
};

export default PostListPage;
