import React, { useState, useCallback } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addStudio } from "../redux/actions/studioActions";

const AddStudioModal = () => {
  const initialState = {
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    latitude: "",
    longitude: "",
    phoneNum: "",
    email: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    categories: "",
  };
  const [newStudio, setNewStudio] = useState({ initialState });
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewStudio({ ...newStudio, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("added studio!");
    dispatch(addStudio(newStudio));

    setNewStudio(initialState);
  };

  const handleClose = (event) => {
    setNewStudio(initialState);
    handleToggle();
  };

  return (
    <div>
      <Button onClick={handleToggle}>Add Studio</Button>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add a New Studio</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <div>
                <Label for="Studio Name">Studio Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={newStudio.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p>Address:</p>
                <Label for="Street">Street</Label>
                <Input
                  type="text"
                  name="street"
                  value={newStudio.street}
                  onChange={handleInputChange}
                />
                <Label for="City">City</Label>
                <Input
                  type="text"
                  name="city"
                  value={newStudio.city}
                  onChange={handleInputChange}
                />
                <Label for="State">State</Label>
                <Input
                  type="text"
                  name="state"
                  value={newStudio.state}
                  onChange={handleInputChange}
                />
                <Label for="Postal Code">Postal Code</Label>
                <Input
                  type="text"
                  name="postalCode"
                  value={newStudio.postalCode}
                  onChange={handleInputChange}
                />
                <Label for="Country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  value={newStudio.country}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p>Coordinates</p>
                <Label for="Latitude">Latitude</Label>
                <Input
                  type="text"
                  name="latitude"
                  value={newStudio.latitude}
                  onChange={handleInputChange}
                />
                <Label for="Longitude">Longitude</Label>
                <Input
                  type="text"
                  name="longitude"
                  value={newStudio.longitude}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label for="Phone Number">Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNum"
                  value={newStudio.phoneNum}
                  onChange={handleInputChange}
                />
                <Label for="Email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={newStudio.email}
                  onChange={handleInputChange}
                />
                <Label for="Website">Website</Label>
                <Input
                  type="text"
                  name="website"
                  value={newStudio.website}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p>Social Media Links:</p>
                <Label for="Facebook">Facebook</Label>
                <Input
                  type="text"
                  name="facebook"
                  value={newStudio.facebook}
                  onChange={handleInputChange}
                />
                <Label for="Instagram">Instagram</Label>
                <Input
                  type="text"
                  name="instagram"
                  value={newStudio.instagram}
                  onChange={handleInputChange}
                />
                <Label for="Twitter">Twitter</Label>
                <Input
                  type="text"
                  name="twitter"
                  value={newStudio.twitter}
                  onChange={handleInputChange}
                />
                <Label for="Youtube">Youtube</Label>
                <Input
                  type="text"
                  name="youtube"
                  value={newStudio.youtube}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label for="Categories">Categories</Label>
                <Input
                  type="text"
                  name="categories"
                  value={newStudio.categories}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                value="Save"
                type="submit"
                outline
                color="primary"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </FormGroup>
          </Form>
          <Button
            value="close"
            type="button"
            outline
            color="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddStudioModal;
