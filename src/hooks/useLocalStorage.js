import { useState, useEffect } from "react";

const PREFIX = "react-code-editor-";
export default function useLocalStorage(key, initialvalue) {
  const prefixkey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixkey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialvalue === "function") {
      return initialvalue();
    } else {
      return initialvalue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixkey, JSON.stringify(value));
  }, [prefixkey, value]);

  return [value, setValue];
}
