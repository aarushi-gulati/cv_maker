import { useState } from 'react'
import './styles/overall.css'
import Resume from './components/Resume'
import Form from './components/Form';

function App() {
  const [generalSection, setGeneralSection] = useState([]);
  const [educationSection, setEducationSection] = useState([]);
  const [experienceSection, setExperienceSection] = useState([]);

  const handleGeneralChange = (value) => {
    setGeneralSection(value);
  }

  const handleEducationChange = (value) => {
    setEducationSection(value);
  }

  const handleExperienceChange = (value) => {
    setExperienceSection(value);
  }

  return (
    <div className='overall'>
      <div className="form">
        <Form 
          generalInfo={generalSection}
          educationInfo={educationSection}
          experienceInfo={experienceSection}
          onGenerealChange={handleGeneralChange}
          onEducationChange={handleEducationChange}
          onExperienceChange={handleExperienceChange}
        />
      </div>
      <div className="resume">
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


