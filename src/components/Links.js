import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      
      {/* First <a> tag with GitHub link */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>

      {/* Second <a> tag with LinkedIn link */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
