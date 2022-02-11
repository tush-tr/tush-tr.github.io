const Education = () => {
  return (
    <div className="resume-section education">
      <h3 className="resume-section-title">Education</h3>
      <div className="education-content">
        <div className="institute-name">
          <div className="institute">Himalayan Garhwal University</div>
          <div className="study-duration">2017-2020</div>
        </div>
        <div className="studyname">
          <div className="course-title"> Information Technology</div>
          <div className="about-course">
            Bechelors of Science in Information Technology. Focused course on
            programming in C/C++, web technologies, DBMS and many else.
          </div>
        </div>
      </div>
      <br />
      <div className="education-content">
        <div className="institute-name">
          <div className="institute">Uttar Pradesh State Board</div>
          <div className="study-duration">2015-2017</div>
        </div>
        <div className="studyname">
          <div className="course-title"> Intermediate Examination</div>
          <div className="about-course">
            Intermediate qualification specialized in PCM (Physics, Chemistry,
            Mathematics).
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
