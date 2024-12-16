import { Education, Experience } from "./sections";

function resume(props) {
    const generalInfo = props.general;
    const educationInfo = props.education;
    const experienceInfo = props.experience;
    return (
        <>
            <div id="header">
                <div id="name">
                    {generalInfo.name}
                </div>
                <div id="contact">
                    {generalInfo.email}
                    {generalInfo.contact}
                    {generalInfo.location}
                </div>
            </div>

            <Education 
            education={educationInfo}
            />

            <Experience
            experience={experienceInfo}
            />
        </>
    ) 
}

export default resume;