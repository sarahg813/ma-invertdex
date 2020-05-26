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
  Col,
  Row,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addStudio } from "../../redux/actions/studiosActions";

const AddStudioModal = () => {
  const initialState = {
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    latitude: "",
    longitude: "",
    phoneNum: "",
    email: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
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
    handleToggle();
  };

  return (
    <div>
      <Button
        value="Add Studio"
        color="success"
        size="sm"
        type="button"
        className="mb-2"
        onClick={handleToggle}
      >
        Add Studio
      </Button>

      <Modal isOpen={modal} toggle={handleToggle} size="lg">
        <ModalHeader toggle={handleToggle}>Add a New Studio</ModalHeader>
        <ModalBody>
          <div role="form">
            <Form>
              <FormGroup>
                <Label for="Studio Name">Studio Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={newStudio.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Address">Address</Label>
                <Input
                  type="text"
                  name="street"
                  value={newStudio.street}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="City">City</Label>
                    <Input
                      type="text"
                      name="city"
                      value={newStudio.city}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="State">State</Label>
                    <Input
                      type="select"
                      name="state"
                      id="state"
                      value={newStudio.state}
                      onChange={handleInputChange}
                    >
                      <option>DC, District of Columbia</option>
                      <option>DE, Deleware</option>
                      <option>MD, Maryland</option>
                      <option>NJ, New Jersey</option>
                      <option>NY, New York</option>

                      <option>PA, Pennsylvania</option>
                      <option>VA, Virginia</option>
                      <option>W. VA, West Virginia</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="Zip">Zip</Label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={newStudio.postalCode}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Latitude">Latitude</Label>
                    <Input
                      type="text"
                      name="latitude"
                      value={newStudio.latitude}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Longitude">Longitude</Label>
                    <Input
                      type="text"
                      name="longitude"
                      value={newStudio.longitude}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Phone Number">Phone Number</Label>
                    <Input
                      type="text"
                      name="phoneNum"
                      value={newStudio.phoneNum}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                      type="text"
                      name="email"
                      value={newStudio.email}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="Website">Website</Label>
                <Input
                  type="text"
                  name="website"
                  value={newStudio.website}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <p>Social Media Links:</p>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Facebook">Facebook</Label>
                    <Input
                      type="text"
                      name="facebook"
                      value={newStudio.facebook}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Instagram">Instagram</Label>
                    <Input
                      type="text"
                      name="instagram"
                      value={newStudio.instagram}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Twitter">Twitter</Label>
                    <Input
                      type="text"
                      name="twitter"
                      value={newStudio.twitter}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Youtube">Youtube</Label>
                    <Input
                      type="text"
                      name="youtube"
                      value={newStudio.youtube}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                value="Save"
                type="submit"
                color="success"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddStudioModal;
