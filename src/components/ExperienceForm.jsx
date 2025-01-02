import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import "../styles/form.css"

export function ExperienceForm({ experienceInfo, onChange }) {
    const [editingStatus, setEditingStatus] = useState("saved");
    const [idToBeEdited, setIdToBeEdited] = useState(0);

    const companys = experienceInfo.map((company) => {
        return {id: company.id, name: company.name}
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

    const handleClickSave = (newExperienceInfo) => {
        setEditingStatus("saved");
        onChange(newExperienceInfo);
    }

    const handleClickDelete = (id) => {
        console.log(id);
        onChange((prevItems) => prevItems.filter((item) => item.id !== id));
    }
 
    return (
        <>
        {editingStatus=="adding" ? (
            <AddExperience
            onClickSave={handleClickSave}
            />
        ) : editingStatus=="editing" ? (
            <EditExperience
            company={experienceInfo.find((item) => item.id === idToBeEdited)}
            onClickSave={handleClickSave}
            onClickCancel={handleClickCancel}
            />
        ) : <SavedExperience
            companys={companys}
            onClickEdit={handleClickEdit}
            onClickAdd={handleClickAdd}
            onClickDelete={handleClickDelete}
            />}
        </>
    )
}   

function SavedExperience({ companys, onClickEdit, onClickAdd, onClickDelete }) {
    const companysList = companys.map((company) => 
        <li key={company.id} id={company.id}>
            <div className="sectionSaved">
            <div onClick={onClickEdit} id={company.id}>
            {company.name}
            </div>
            <Icon path={mdiDelete} size={1} onClick={() => onClickDelete(company.id)}/>
            </div>
            </li>
    )

    return (
        <>
            <h1>Experience: </h1>
            <ul>
                {companysList}
            </ul>
            <h2 onClick={onClickAdd}>+ Add Experience</h2>
        </>
    )
}

function AddExperience({ onClickSave }) {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const formDataObj = new FormData(e.target); // Extract all form data
        const submittedData = Object.fromEntries(formDataObj.entries()); // Convert to object

        const company = {...submittedData, id: uuidv4()};
    
        onClickSave((prevExperience) => [...prevExperience, company]);
    };

    return (
        <>
            <h1>Add Experience: </h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <label>
                    Company Name: <input name="name" />
                </label>
                <label>
                    Position Title: <input name="title" />
                </label>
                <label>
                    Start Date: <input name="start" />
                </label>
                <label>
                    End Date: <input name="end" />
                </label>
                <label>
                    Location: <input name="location" />
                </label>
                <label>
                    Description: <input name="desc" type="text"/>
                </label>
                </div> 
                <button type="submit" className="button">Save</button>
            </form>
        </>
    )
}

function EditExperience({ company, onClickSave, onClickCancel }) {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const formDataObj = new FormData(e.target); // Extract all form data
        const submittedData = Object.fromEntries(formDataObj.entries()); // Convert to object

        const updatedcompany = {...submittedData, id: company.id};
    
        onClickSave((prevData) => 
            prevData.map((item) => 
                item.id==company.id ? 
                    updatedcompany
                    :item
            )
        ) 
    };

    return (
        <>
            <h1>Add Experience: </h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <label>
                    Company Name: <input name="name" defaultValue={company.name}/>
                </label>
                <label>
                    Position Title: <input name="title" defaultValue={company.title} />
                </label>
                <label>
                    Start Date: <input name="start" defaultValue={company.start} />
                </label>
                <label>
                    End Date: <input name="end" defaultValue={company.end} />
                </label>
                <label>
                    Location: <input name="location" defaultValue={company.location} />
                </label>
                <label>
                    Description: <input name="desc" defaultValue={company.desc} />
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