import Skills from './skills'
import Header from './resume-header'
import Experience from './experience'
import Projects from './projects'
import Education from './education'
import Certification from './certifications'
import Other from './other'
const CV = () => {
    return (
        <div id="CV" className="resume-build">
            <div className="resume-inner">
                <Header />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Certification />
                <Other />
            </div>
        </div>
    )
}
export default CV