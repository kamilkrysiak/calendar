import React from 'react';
import EditButton from './EditButton';
import SaveButton from './SaveButton';
import './Card.css';

const Card = (props) => { 
    if(props.edited) { 
        return ( 
        <div className="card">
            <h3>{props.name}</h3><br></br>
            <span>{props.date}</span><br></br>
            <span>{props.weekDay}</span><br></br>
            <textarea defaultValue={props.info} onChange={props.handleTextAreaInfo}>
                 </textarea><br></br>
            <SaveButton 
            handleSaveEdit={props.handleSaveEdit}
            id={props.id}/> 
            <button style={{
                    backgroundColor: "red", 
                    color: "white",
                    border: "none",
                    padding: ".5em",
            }}
            onClick={() => props.handleDeleteHoliday(props.id)}>Usuń</button>
        </div>
        )
    }
    else {
    return ( 
        <div className="card">
            <h3>{props.name}</h3><br></br>
            <span>{props.date}</span><br></br>
            <span>{props.weekDay}</span>
            <p>{props.info}</p>
            <EditButton 
            handleEditChange={props.handleEditChange} 
            id={props.id}
             />
            <button style={{
                    backgroundColor: "red", 
                    color: "white",
                    border: "none",
                    padding: ".5em 1em",
                }}
            onClick={() => props.handleDeleteHoliday(props.id)}>Usuń</button>
        </div>
    )}
}

export default Card;