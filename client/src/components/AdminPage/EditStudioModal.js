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
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../tools/LoadingSpinner";
import { updateStudio, getStudios } from "../../redux/actions/studiosActions";
import {
  getStudioById,
  setStudioUnload,
} from "../../redux/actions/studioActions";

const EditStudioModal = (props) => {
  const dispatch = useDispatch();
  const { studio, isLoading, isLoaded } = useSelector((state) => state.studio);
  const studioID = props.id;
  const [editStudio, setEditStudio] = useState({});
  const [modal, setModal] = useState(false);

  const handleToggle = useCallback(() => {
    setModal(!modal);

    !modal && dispatch(setStudioUnload());
  }, [dispatch, modal]);

  const handleOnClick = () => {
    dispatch(getStudioById(studioID));
    handleToggle();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEditStudio({ ...editStudio, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateStudio(studioID, editStudio));
    dispatch(getStudios());
  };

  return (
    <div>
      <Button
        value="Edit"
        outline
        color="primary"
        size="sm"
        type="button"
        onClick={handleOnClick}
      >
        Edit
      </Button>

      <Modal isOpen={modal} toggle={handleToggle} size="lg">
        <ModalHeader toggle={handleToggle}>Edit Studio</ModalHeader>
        <ModalBody>
          {isLoading && <LoadingSpinner />}
          {isLoaded && (
            <Form>
              <FormGroup>
                <Label for="Studio Name">Studio Name</Label>
                <Input
                  type="text"
                  name="name"
                  defaultValue={studio.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Address">Address</Label>
                <Input
                  type="text"
                  name="address.street"
                  defaultValue={studio.address.street}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="City">City</Label>
                    <Input
                      type="text"
                      name="address.city"
                      defaultValue={studio.address.city}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="State">State</Label>
                    <Input
                      type="select"
                      name="address.state"
                      id="state"
                      defaultValue={studio.address.state.join(", ")}
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
                      name="address.postalCode"
                      defaultValue={studio.address.postalCode}
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
                      name="coordinates.latitude"
                      defaultValue={studio.coordinates.latitude}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Longitude">Longitude</Label>
                    <Input
                      type="text"
                      name="coordinates.longitude"
                      defaultValue={studio.coordinates.longitude}
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
                      defaultValue={studio.phoneNum}
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
                      defaultValue={studio.email}
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
                  defaultValue={studio.website}
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
                      defaultValue={
                        studio.socialMedia.facebook
                          ? studio.socialMedia.facebook
                          : ""
                      }
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
                      defaultValue={
                        studio.socialMedia.instagram
                          ? studio.socialMedia.instagram
                          : ""
                      }
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
                      defaultValue={
                        studio.socialMedia.twitter
                          ? studio.socialMedia.twitter
                          : ""
                      }
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
                      defaultValue={
                        studio.socialMedia.youtube
                          ? studio.socialMedia.youtube
                          : ""
                      }
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
                Update
              </Button>
            </Form>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditStudioModal;
