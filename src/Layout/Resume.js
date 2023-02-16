import React from "react";
import resume from "../images/Steven-Vicino-Resume.pdf";

function Resume() {
  return (
    <div className="w-100" id="text-box">
      <embed
        src={resume}
        alt="resume"
        id="full-picture"
        type="application/pdf"
      />
    </div>
  );
}

export default Resume;
