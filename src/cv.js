import './cv.css'
import Skills from './components/skills'
import Header from './components/resume-header'
import Experience from './components/experience'
import Projects from './components/projects'
import Education from './components/education'
import Certification from './components/certifications'
import Other from './components/other'
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