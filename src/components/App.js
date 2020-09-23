import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "./App.css";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  // const [html, setHtml] = useLocalStorage("html", "");
  // const [css, setCss] = useLocalStorage("css", "");
  // const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className='pane top_pane'>
        {/* getChildValue is a function which get 
        Value from child and set it in useState */}
        <Editor
          language='xml'
          displayName='HTML'
          value={html}
          getChildValue={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          getChildValue={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          getChildValue={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='render'
          frameBorder='0'
          height='100%'
          width='100%'
          sandbox='allow-scripts'
        />
      </div>
    </>
  );
}

export default App;
