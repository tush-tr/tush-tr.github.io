import Template from './projects/template'
const Projects = () => {
    return (
        <div className="resume-section projects">
            <h3 className="resume-section-title">Projects</h3>
            <div className="resume-section-content project-info">
                <Template title="College Review" desc="A platform built using MERN stack where students can post reviews of their colleges, and also search
              colleges and see their reviews." link="https://fast-lake-53080.herokuapp.com/" />
              
            </div>
            <p className="project-info">See more at <a href="https://tush-tr.github.io/projects.html">tush-tr.github.io/projects</a></p>
        </div>

    )
}
export default Projects