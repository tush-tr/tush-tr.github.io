const ProjectTemplate = (props) => {
  return (
    <div className="project-info">
      <h4>{props.title}</h4>
      <p>
        {props.desc}
        <br></br>
        <a href={props.link}>See Project</a>{" "}
        {props.children}
      </p>
    </div>
  );
};
export default ProjectTemplate;
