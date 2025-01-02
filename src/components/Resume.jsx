import { Education, Experience } from "./Sections";
import "../styles/resume.css"

function resume(props) {
    const generalInfo = props.general;
    const educationInfo = props.education;
    const experienceInfo = props.experience;
    return (
        <>
        {generalInfo.lenth!= 0 ? 
            (
            <div id="header">
                <div id="name">
                    {generalInfo.name}
                </div>
                <div className="contacts">
                    <div className="contact">
                    <img src="/email (2).svg" className="icon" />
                    {generalInfo.email}
                    </div>
                    <div className="contact">
                    <img src="/phone (1).svg" className="icon" />
                    {generalInfo.contact}
                    </div>
                    <div className="contact">
                    <img src="/map-marker (1).svg" className="icon" />
                    {generalInfo.location}
                    </div>
                </div>
            </div>
            ) : <div id="header"></div>
        }
        {educationInfo.length>0 ?
            (
            <Education 
            education={educationInfo}
            />
            ) : <div></div>
        }
        {experienceInfo.length>0 ?
            (
            <Experience
            experience={experienceInfo}
            />
            ) : <div></div>
        }
        </>
    ) 
}

export default resume;