import { GeneralFormEditable, GeneralFormSaved } from "./GeneralForm";
import { useState } from "react";
import { EducationForm } from "./EducationForm";
import { ExperienceForm } from "./ExperienceForm";

function Form({ onGenerealChange, onEducationChange, onExperienceChange, generalInfo, educationInfo, experienceInfo }) {

    const [editingGeneral, setEditingGeneral] = useState(true);

    const submitGeneral = (general) => {
        toggleGeneral();
        onGenerealChange(general);
    }

    const toggleGeneral = () => {
        setEditingGeneral(!editingGeneral);
    }

    return(
        <>
            {editingGeneral ? (
                <GeneralFormEditable
                onSubmit={submitGeneral}
                generalInfo={generalInfo}
                />
            ) : (
                <GeneralFormSaved 
                generalInfo={generalInfo}
                onClick={toggleGeneral}
                />
            )}

            <EducationForm
            educationInfo={educationInfo}
            onChange={onEducationChange}
            />

            <ExperienceForm
            experienceInfo={experienceInfo}
            onChange={onExperienceChange}
            />
        </>
    )
}

export default Form;