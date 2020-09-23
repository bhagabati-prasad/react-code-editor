import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  const { displayName, language, value, getChildValue } = props;

  const [open, setOpen] = useState(true);

  // This function passes input box value from child(Editor) to parent(App)
  function handlChange(editor, data, editorValue) {
    // editorValue is the value of 'ControlledEditor'
    getChildValue(editorValue);
  }

  return (
    <div className={`editor_container ${open ? "" : "collapsed"}`}>
      <div className='editor_title'>
        {displayName}
        <button onClick={() => setOpen(!open)}>{open ? "<" : ">"}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handlChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
