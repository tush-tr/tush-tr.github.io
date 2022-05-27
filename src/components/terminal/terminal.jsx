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
          A passionate developer and DevOps Engineer having 1+ year of
          experience with handson on automating and optimizing critical
          deployments over a large infrastructure. Passionate about Web
          development and Cloud-Native technologies.
          <span className="cursor2">_</span>
        </p>
        <p className="line3">
          [?] What more would you like? (Press space to select)
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
