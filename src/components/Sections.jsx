import "../styles/resume.css"

export function Education({ education }) {
    const educationList = education.map((institute) =>
    <li key={institute.id}>
        <div className="sectionRow">
        <div className="orgName">{institute.name}</div>
        <div>{institute.start} - {institute.end}</div>
        </div>
        <div className="sectionRow">
        <div>{institute.degree}</div>
        <div>Grade: {institute.grade}</div>
        </div>
    </li>)

    return (
        <>
            <div className="heading">Education: </div>
            <hr className="line"></hr>
            <ul>
                {educationList}
            </ul>
        </>
    )
}

export function Experience({ experience }) {
    const experienceList = experience.map((company) => 
    <li key={company.id}>
        <div className="sectionRow">
        <div className="orgName">{company.name}</div>
        <div>{company.start} - {company.end}</div>
        </div>
        <div className="sectionRow">
        <div>{company.title}</div>
        <div>{company.location}</div>
        </div>
        <div>{company.desc}</div>
    </li>)

    return (
        <>
            <div className="heading">Experience: </div>
            <hr className="line"></hr>
            <ul>
                {experienceList}
            </ul>
        </>
    )
}