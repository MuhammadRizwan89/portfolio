import React from "react";

function SkillCounter() {
  return (
    <>
      <div className="counter_outerline flex items-center justify-center">
        <span>15</span>
        <div className="skillCounter_innertext">
          <p className="valueOne">Year</p>
          <p className="valueTwo">of Experance</p>
        </div>
      </div>
    </>
  );
}
function SectionHding(prop) {
  return (
    <>
      <div className={`${prop.newclass} main_heading`}>
        <span className={`${prop.extr} hdingbtn`}>{prop.btntext}</span> {/* "undefind main_heading" */}
        <h2>{prop.sechdingtext}</h2>
      </div>
    </>
  );
}

export { SkillCounter, SectionHding };
