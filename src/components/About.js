/*import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
*/

import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div>
      {/* Conditional rendering of the <p> tag based on the presence of 'bio' prop */}
      {bio && <p>{bio}</p>}

      {/* Pass github and linkedin as props to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
