import React, { useState } from "react";
import "./collapse.css";

const Collapse = ({ title, content }) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapseBodyOne ${open && "open"}`}>
      <div className="collapseTitle" onClick={handleClick}>
        <p className="collapseTxt">{title}
          <span className="image-collapse"> </span>
        </p>
      </div>
      <div className="collapseContent">{content}</div>
    </div>
  );
};

export default Collapse;
