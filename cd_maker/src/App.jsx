import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './components/resume'

const exampleGeneralInfo = {
    name: "Aarushi Gulati",
    email: "aarushigulati07",
    contact: "9301753553",
    location: "Indore, India"
};

const exampleEducationInfo = [
  {
    id: 1,
    start: "2010",
    end: "2014",
    degree: "BSc Computer Science",
    grade: "A+",
    name: "XYZ University",
  },
  {
    id: 2,
    start: "2015",
    end: "2017",
    degree: "MSc Data Science",
    grade: "A",
    name: "ABC University",
  },
];

const exampleExperienceInfo = [
  {
    id: 1,
    start: "2018",
    end: "2020",
    name: "Tech Corp",
    title: "Software Engineer",
    location: "San Francisco",
    desc: "Worked on web development projects.",
  },
  {
    id: 2,
    start: "2020",
    end: "2023",
    name: "BigTech",
    title: "Senior Developer",
    location: "New York",
    desc: "Led a team of engineers to develop scalable applications.",
  },
];

function App() {
  // const [count, setCount] = useState(0)
  const [generalSection, setGeneralSection] = useState(exampleGeneralInfo);
  const [educationSection, setEducationSection] = useState(exampleEducationInfo);
  const [experienceSection, setExperienceSection] = useState(exampleExperienceInfo);

  return (
    <>
      <Resume 
      general={generalSection}
      education={educationSection}
      experience={experienceSection}
      />
    </>
  )
}

export default App


