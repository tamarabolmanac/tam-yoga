import React from 'react'
import Dialog from 'react-dialog'
import { useParams } from "react-router";

function DeleteDialog(props) {
  let { wp } = useParams();

  const handleDelete= () => {
    const url_destroy = `http://localhost:3000/api/v1/workout_programs/${props.wp.id}`
    
    fetch(url_destroy, {
      method: "DELETE"
      })
      .then(response => response.json())
      .then(json => {
        
      });
  }
  
  return(
    <Dialog
        title="Delete workout plan"
        modal={true}
        onClose={props.handleClose}
        buttons={
            [{
              text: "Close",
              onClick: props.handleClose
            },
            {
              text: "Confirm",
              onClick: () => handleDelete()
            }]
        }>
        <p>{props.wp.description}</p>
    </Dialog>
    
  )
}

export default DeleteDialog;