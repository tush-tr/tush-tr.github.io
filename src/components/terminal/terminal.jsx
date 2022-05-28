import "./terminal.css";
const Terminal = () => {
  return (
    <div className="terminal-main-start">
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose" />
        <div className="fakeButtons fakeMinimize" />
        <div className="fakeButtons fakeZoom" />
      </div>
      <div className="fakeScreen">
        <p className="line1">
          $ echo $Tushar<span className="cursor1">_</span>
        </p>
        <p className="line2">
          A Software Engineer with a strong interest in Cloud-Native Technologies.
          <span className="cursor2">_</span>
        </p>
        <p className="line3">
          [?] Specialized in both frontend and backend development.
          <span className="cursor3">_</span>
        </p>
        <p className="line4">
          $<span className="cursor4">_</span>
        </p>
      </div>
    </div>
  );
};
export default Terminal;
