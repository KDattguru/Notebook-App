import React from "react";
import noteContext from "../context/notes/noteContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useContext } from "react";
 
const AddNote = () => {
    const context = useContext(noteContext)
   const{addNote}=context
   const [note, setNote] = useState({title:"",description:"" ,tag:""})
   const handleClick =(e)=>{
    e.preventDefault();

     addNote(note)
   }
   const onChange=(e)=>{
     setNote({...note,[e.target.name]:e.target.value})
   }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" id="title" name="title"  onChange={onChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" id="description" name="description" onChange={onChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={handleClick} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNote;
