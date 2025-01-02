import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import "../styles/form.css"

export function EducationForm({ educationInfo, onChange }) {
    const [editingStatus, setEditingStatus] = useState("saved");
    const [idToBeEdited, setIdToBeEdited] = useState(0);

    const institutes = educationInfo.map((institute) => {
        return {id: institute.id, name: institute.name}
    });

    const handleClickEdit = (e) => {
        setEditingStatus("editing");
        setIdToBeEdited(e.target.id);
    } 

    const handleClickAdd = () => {
        setEditingStatus("adding");
    }

    const handleClickCancel = () => {
        setEditingStatus("saved");
    }

    const handleClickSave = (newEducationInfo) => {
        setEditingStatus("saved");
        onChange(newEducationInfo);
    }

    const handleClickDelete = (id) => {
        console.log(id);
        onChange((prevItems) => prevItems.filter((item) => item.id !== id));
    }
 
    return (
        <>
        {editingStatus=="adding" ? (
            <AddEducation
            onClickSave={handleClickSave}
            />
        ) : editingStatus=="editing" ? (
            <EditEducation
            institute={educationInfo.find((item) => item.id === idToBeEdited)}
            onClickSave={handleClickSave}
            onClickCancel={handleClickCancel}
            />
        ) : <SavedEducation
            institutes={institutes}
            onClickEdit={handleClickEdit}
            onClickAdd={handleClickAdd}
            onClickDelete={handleClickDelete}
            />}
        </>
    )
}   

function SavedEducation({ institutes, onClickEdit, onClickAdd, onClickDelete }) {   

    const institutesList = institutes.map((institute) => 
        <li key={institute.id} id={institute.id}>
            <div className="sectionSaved">
            <div onClick={onClickEdit} id={institute.id}>
            {institute.name}
            </div>
            <Icon path={mdiDelete} size={1} onClick={() => onClickDelete(institute.id)}/>
            </div>
        </li>
    )

    return (
        <>
            <h1>Education: </h1>
            <ul>
                {institutesList}
            </ul>
            <h2 onClick={onClickAdd}>+ Add Education</h2>
        </>
    )
}

function AddEducation({ onClickSave }) {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const formDataObj = new FormData(e.target); // Extract all form data
        const submittedData = Object.fromEntries(formDataObj.entries()); // Convert to object

        const institute = {...submittedData, id: uuidv4()};
    
        onClickSave((prevEducation) => [...prevEducation, institute]);
    };

    return (
        <>
            <h1>Add Education: </h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <label>
                    Institute Name: <input name="name" />
                </label>
                <label></label>
                <label>
                    Degree Name: <input name="degree" />
                </label>
                <label>
                    Start Date: <input name="start" />
                </label>
                <label>
                    End Date: <input name="end" />
                </label>
                <label>
                    Grade: <input name="grade" />
                </label>
                </div>
                <button type="submit" className="button">Save</button>
            </form>
        </>
    )
}

function EditEducation({ institute, onClickSave, onClickCancel }) {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const formDataObj = new FormData(e.target); // Extract all form data
        const submittedData = Object.fromEntries(formDataObj.entries()); // Convert to object

        const updatedInstitute = {...submittedData, id: institute.id};
    
        onClickSave((prevData) => 
            prevData.map((item) => 
                item.id==institute.id ? 
                    updatedInstitute
                    :item
            )
        ) 
    };

    return (
        <>
            <h1>Add Education: </h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <label>
                    Institute Name: <input name="name" defaultValue={institute.name}/>
                </label>
                <label>
                    Degree Name: <input name="degree" defaultValue={institute.degree} />
                </label>
                <label>
                    Start Date: <input name="start" defaultValue={institute.start} />
                </label>
                <label>
                    End Date: <input name="end" defaultValue={institute.end} />
                </label>
                <label>
                    Grade: <input name="grade" defaultValue={institute.grade} />
                </label>
                </div>
                <div className="buttonContainer">
                    <button type="submit">Save</button>
                    <button onClick={onClickCancel}>Cancel</button>
                </div>
            </form>
        </>
    )
}