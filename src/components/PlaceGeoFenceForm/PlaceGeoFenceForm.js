import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import classes from "./PlaceGeoFenceForm.module.css";
import { HuePicker } from "react-color";

const URL = "";

const PlaceGeoFenceForm = (props) => {
  const [Name, setName] = useState(null);
  const [Limit, setLimit] = useState(0);
  const [Description, setDescription] = useState("");
  const [modal, setModal] = useState(false);
  // const [color, setColor] = useState("#ffff");

  // const handleChangeComplete = (e) => {
  //   setColor(e.hex);
  // };

  const onSendPress = async () => {
    // let rbg = props.color;
    // let radius = props.radius;
    // await axios
    //   .post(URL)
    //   .then((response) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
    toggle();
  };
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form className={classes.addFenceForm}>
        <h2>Add new Fence</h2>
        <p>Customize and place a geofence, Once you're ready send it to the database!</p>
        <FormGroup>
          <Label>Name of Fence</Label>
          <Input
            type="text"
            placeholder="Enter here"
            onKeyUp={(e) => {
              setName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Select Radius (meters)</Label>
          <Input type="number" placeholder="0" onKeyUp={props.setRadius} />
        </FormGroup>
        <FormGroup>
          <Label>Pick a color</Label>
          <HuePicker color={props.color} onChangeComplete={props.colorChange} />
        </FormGroup>
        <FormGroup>
          <Label>Enter Capacity Limit</Label>
          <Input
            type="number"
            placeholder="Enter here"
            onKeyUp={(e) => {
              setLimit(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Add a Description</Label>
          <Input
            type="textarea"
            onKeyUp={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={toggle}>Save to database</Button>
        </FormGroup>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>WARNING</ModalHeader>
        <ModalBody>
          Are you sure you want to send these setting to the database? Make sure
          you verify that all information is set correctly.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSendPress}>
            Send to database
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PlaceGeoFenceForm;
