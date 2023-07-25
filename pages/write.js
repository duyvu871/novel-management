import dynamic from "next/dynamic";
import React, { useState, useRef, useMemo } from "react";
import Field from "../components/Input/Field/FiledForEditor";
const Editor = dynamic(() => import("../Lib/Editor"), { ssr: false, loading: () => <p>Loading ...</p>,});

// const EditorMemo = React.memo((props) =>  <Editor {...props} />)

export default function write({ content }) {
//   console.log(1);
  const saveBtn = useRef("");
  const cancelBtn = useRef("");
  const fieldEl = useRef("");
  const [fieldShow, setFieldShow] = useState(false);
  const [fieldTitle, setFieldTitle] = useState("");

  const [body, setBody] = useState(content || "");

  const handleBodyData = (e) => {
    setBody(e);
  };
  return (
    <div className=" my-8 h-fit" id="editor-parent">
      <h1 className="text-lg font-bold mx-4">Content</h1>
      <div className="mx-[15px]">
        {fieldShow && (
          <Field
            field={{
              title: fieldTitle,
              element: fieldEl,
            }}
            saveBtn={saveBtn}
            cancelBtn={cancelBtn}
          />
        )}
      </div>
      <Editor
        handlechange={handleBodyData}
        value={body}
        placeholder={"Viết nội dung vào đây...."}
        field={{
          title: { setFieldTitle },
          setFieldShow,
          fieldEl,
          inputBtn: {
            cancelBtn,
            saveBtn,
          },
        }}
        style={{ height: "200px" }}
      />
      <button
        onClick={() => {
          console.log(body);
        }}
      >
        save
      </button>
    </div>
  );
}
