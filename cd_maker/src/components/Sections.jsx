export function Education({ education }) {
    const educationList = education.map((institute) =>
    <li key={institute.id}>
        <div>{institute.start} - {institute.end}</div>
        <div>{institute.grade}</div>
        <div>{institute.name}</div>
        <div>{institute.degree}</div>
    </li>)

    return (
        <>
            <h1>Education: </h1>
            <ul>
                {educationList}
            </ul>
        </>
    )
}

export function Experience({ experience }) {
    const experienceList = experience.map((company) => 
    <li key={company.id}>
        <div>{company.start} - {company.end}</div>
        <div>{company.name}</div>
        <div>{company.title}</div>
        <div>{company.location}</div>
        <div>{company.desc}</div>
    </li>)

    return (
        <>
            <h1>Experience: </h1>
            <ul>
                {experienceList}
            </ul>
        </>
    )
}