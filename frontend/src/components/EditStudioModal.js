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
import { useDispatch, useSelector } from "react-redux";
import { updateStudio, getStudios } from "../redux/actions/studiosActions";
import { getStudioById, setStudioUnload } from "../redux/actions/studioActions";

const EditStudioModal = (props) => {
  const dispatch = useDispatch();
  const { studio, isLoading, isLoaded } = useSelector((state) => state.studio);
  const studioID = props.id;
  const [editStudio, setEditStudio] = useState({});
  const [modal, setModal] = useState(false);

  const handleToggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

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
    console.log(editStudio);
    dispatch(updateStudio(studioID, editStudio));
    handleClose();
  };

  const handleClose = () => {
    handleToggle();
    dispatch(getStudios());
    dispatch(setStudioUnload());
  };

  return (
    <div>
      <Button
        value="Edit"
        outline
        color="warning"
        size="sm"
        type="button"
        onClick={handleOnClick}
      >
        Edit
      </Button>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Edit Studio</ModalHeader>
        <ModalBody>
          {isLoading && <p>Loading...</p>}
          {isLoaded && (
            <Form>
              <FormGroup>
                <div>
                  <Label for="Studio Name">Studio Name</Label>
                  <Input
                    type="text"
                    name="name"
                    defaultValue={studio.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Address:</p>
                  <Label for="Street">Street</Label>
                  <Input
                    type="text"
                    name="address.street"
                    defaultValue={studio.address.street}
                    onChange={handleInputChange}
                  />
                  <Label for="City">City</Label>
                  <Input
                    type="text"
                    name="address.city"
                    defaultValue={studio.address.city}
                    onChange={handleInputChange}
                  />
                  <Label for="State">State</Label>
                  <Input
                    type="text"
                    name="address.state"
                    defaultValue={studio.address.state}
                    onChange={handleInputChange}
                  />
                  <Label for="Postal Code">Postal Code</Label>
                  <Input
                    type="text"
                    name="address.postalCode"
                    defaultValue={studio.address.postalCode}
                    onChange={handleInputChange}
                  />
                  <Label for="Country">Country</Label>
                  <Input
                    type="text"
                    name="address.country"
                    defaultValue={studio.address.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Coordinates</p>
                  <Label for="Latitude">Latitude</Label>
                  <Input
                    type="text"
                    name="coordinates.latitude"
                    defaultValue={studio.coordinates.latitude}
                    onChange={handleInputChange}
                  />
                  <Label for="Longitude">Longitude</Label>
                  <Input
                    type="text"
                    name="coordinates.longitude"
                    defaultValue={studio.coordinates.longitude}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label for="Phone Number">Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNum"
                    defaultValue={studio.phoneNum}
                    onChange={handleInputChange}
                  />
                  <Label for="Email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    defaultValue={studio.email}
                    onChange={handleInputChange}
                  />
                  <Label for="Website">Website</Label>
                  <Input
                    type="text"
                    name="website"
                    defaultValue={studio.website}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Social Media Links:</p>
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
                </div>
                <div>
                  <Label for="Categories">Categories</Label>
                  <Input
                    type="text"
                    name="categories"
                    defaultValue={studio.categories}
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
          )}
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

export default EditStudioModal;
