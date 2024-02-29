import React from "react";

import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";



const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 ">
      <Card className=" card my-3 shadow">
        <Card.Body>
        <div className="icon d-flex align-items-center">  <Card.Title> {note.title}</Card.Title><MdDelete  className="mx-3"/>
          <RiEditBoxFill />
</div>
        
          <Card.Text>{note.description}</Card.Text>
        
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
