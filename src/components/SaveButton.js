import React from 'react'; 

const SaveButton = (props) => { 
    return (
        <button style={{
            backgroundColor: "green", 
            color: "white",
            border: "none",
            padding: ".5em 1em",
            marginRight: "1em"
           }}
        
        onClick={() => props.handleSaveEdit(props.id)}>Zapisz</button>
    )
}

export default SaveButton;