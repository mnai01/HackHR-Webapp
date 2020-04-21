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

const URL =
  "https://cors-anywhere.herokuapp.com/https://hack-hr.herokuapp.com/api/fences/";

const PlaceGeoFenceForm = (props) => {
  const [Name, setName] = useState(null);
  const [Limit, setLimit] = useState(0);
  const [Description, setDescription] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [color, setColor] = useState("#ffff");

  // const handleChangeComplete = (e) => {
  //   setColor(e.hex);
  // };

  const onSendPress = async () => {
    setLoading(true);
    console.log(props.coords);
    let color = props.color;
    let radius = props.radius.rad;
    console.log(
      URL +
        `?company_id=2&fence_name=${Name}&description=${Description}&longitude=${props.coords[1]}&latitude=${props.coords[0]}&radius=${radius}&color=${color.hex}&capacity=${Limit}`
    );
    await axios
      .post(
        URL +
          `?company_id=2&fence_name=${Name}&description=${Description}&longitude=${props.coords[1]}&latitude=${props.coords[0]}&radius=${radius}&color=${color.hex}&capacity=${Limit}`,
        {
          headers: {
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    toggle();
  };
  const toggle = () => setModal(!modal);

  const toggleBoth = () => {
    setLoading(false);
    setModal(!modal);
  };

  return (
    <div>
      <Form className={classes.addFenceForm}>
        <h2>Add new Fence</h2>
        <p>
          Customize and place a geofence, Once you're ready send it to the
          database!
        </p>
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
          <Label>Set a Radius</Label>
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
          <Button onClick={toggleBoth}>Save to database</Button>
        </FormGroup>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>WARNING</ModalHeader>
        {loading ? (
          <ModalBody>Sending... Please wait, this may take a minute </ModalBody>
        ) : (
          <ModalBody>
            Are you sure you want to send these setting to the database? Make
            sure you verify that all information is set correctly.
          </ModalBody>
        )}
        <ModalFooter>
          {loading ? (
            <Button color="primary" onClick={toggle}>
              Exit
            </Button>
          ) : (
            <Button color="primary" onClick={onSendPress}>
              Send to database
            </Button>
          )}
          {loading ? (
            ""
          ) : (
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PlaceGeoFenceForm;
