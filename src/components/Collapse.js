import React, { useState } from "react";
import "../styles/collapse.css";

const Collapse = (title, content) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="body-collapse">
      <div className="collapse-title" onClick={handleClick}>
        {title}
      </div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};

export default Collapse;
