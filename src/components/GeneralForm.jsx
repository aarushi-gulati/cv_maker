import { useState } from "react";
import "../styles/form.css"

export function GeneralFormEditable ({ onSubmit, generalInfo }) {

    const [tempGeneralInfo, setTempGeneralInfo] = useState(generalInfo);

    const handleChange = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        setTempGeneralInfo((prev) => ({ ...prev, [field]: value }));
    }

    return (
        <>
            <h1>General: </h1>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(tempGeneralInfo); }}>
                <div className="container">
                <label>
                    Name: <input name="name" defaultValue={generalInfo.name} onChange={handleChange} />
                </label>
                <label>
                    E-Mail Address: <input name="email" defaultValue={generalInfo.email} onChange={handleChange} />
                </label>
                <label>
                    Contact No.: <input name="contact" defaultValue={generalInfo.contact} onChange={handleChange} />
                </label>
                <label>
                    Location: <input name="location" defaultValue={generalInfo.location} onChange={handleChange} />
                </label>
                </div>
                <button type="submit" className="button">Save</button>
            </form>
        </>
    )
}

export function GeneralFormSaved ({ generalInfo, onClick }) {
    return (
        <>
            <h1>General: </h1>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(generalInfo); }}>
                <div className="container">
                <label>
                    Name: {generalInfo.name}
                </label>
                <label>
                    E-Mail Address: {generalInfo.email}
                </label>
                <label>
                    Contact No.: {generalInfo.contact}
                </label>
                <label>
                    Location: {generalInfo.location}
                </label>
                </div>
                <button onClick={onClick} className="button">Edit</button>
            </form>
        </>
    )
}

export function NewexperienceForm ({ onSubmit }) {
    return (
        <>
            <h1>Add Experience: </h1>
            <form onSubmit={onSubmit}>
                <label>
                    Company Name: <input name="experience-name" />
                </label>
                <label>
                    Position Title: <input name="title" />
                </label>
                <label>
                    Start Date: <input name="experience-start-date" />
                </label>
                <label>
                    End Date: <input name="experience-end-date" />
                </label>
                <label>
                    Location: <input name="location" />
                </label>
                <label>
                    Description: <input name="description" />
                </label>
            </form>
        </>
    )
}
