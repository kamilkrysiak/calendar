import React from 'react'; 
 
const EditButton = (props) => { 


    return ( 
         <button style={{
             backgroundColor: "blue", 
             color: "white",
             border: "none",
             padding: ".5em 1em",
             marginRight: "1em"
            }}
         onClick={() => props.handleEditChange(props.id)}>Edytuj opis</button>
     )
}

export default EditButton;