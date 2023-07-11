import { useState } from "react";
import "../css/header.css";
const Content = () => {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const handleButtonClick = () => {
    if (text) {
      setDisplayedText(text);
      setText("");
    }
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        className="txtarea"
        value={text}
        onChange={handleText}
        placeholder="Enter some text"
      />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayedText}</p>
    </div>
  );
};

export default Content;
