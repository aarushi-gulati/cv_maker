import { useState } from 'react'
import './styles/overall.css'
import Resume from './components/Resume'
import Form from './components/Form';
import { exampleEducationInfo, exampleGeneralInfo, exampleExperienceInfo } from './supplements/exampleData';

function App() {
  const [generalSection, setGeneralSection] = useState(exampleGeneralInfo);
  const [educationSection, setEducationSection] = useState([]);
  const [experienceSection, setExperienceSection] = useState([]);

  const addInstitute = (institute) => {
    const newEducation = {...educationSection, institute};
    setEducationSection(newEducation);
  }

  const addCompany = (company) => {
    const newExperience = {...experienceSection, company};
    setExperienceSection(newExperience);
  }

  const handleGeneralChange = (value) => {
    // const newGeneral = {...generalSection, field: value};
    setGeneralSection(value);
  }

  const handleEducationChange = (value) => {
    // setEducationSection((prevEducation) => 
    //   prevEducation.map((obj) => 
    //     obj.id == id ? {...obj,  [field]:value} : obj
    //   )
    // )
    setEducationSection(value);
  }

  const handleExperienceChange = (value) => {
    // setExperienceSection((prevExperience) => 
    //   prevEducation.map((obj) => 
    //     obj.id == id ? {...obj,  [field]:value} : obj
    //   )
    // )
    setExperienceSection(value);
  }

  const deleteInstitute = (id) => {
    setEducationSection((prevEducation) => 
      prevEducation.filter((institute) => institute.id == id));
  }

  const deleteCompany = (id) => {
    setExperienceSection((prevExperience) => 
      prevExperience.filter((company) => company.id == id));
  }

  return (
    <div className='overall'>
      <div>
        <Form 
          generalInfo={generalSection}
          educationInfo={educationSection}
          experienceInfo={experienceSection}
          onGenerealChange={handleGeneralChange}
          onEducationChange={handleEducationChange}
          onExperienceChange={handleExperienceChange}
        />
      </div>
      <div>
        <Resume 
          general={generalSection}
          education={educationSection}
          experience={experienceSection}
        />
      </div>
    </div>
  )
}

export default App


