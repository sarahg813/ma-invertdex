import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStudios, deleteStudio } from "../redux/actions/studioActions";
import Button from "./Button";

const StudiosList = ({ getStudios, deleteStudio, studio }) => {
  useEffect(() => {
    getStudios();
  }, [getStudios]);

  const { studios } = studio;

  const handleDelete = (id) => {
    deleteStudio(id);
  };

  return (
    <div>
      <ul>
        {studios.map((studio) => (
          <li key={studio._id}>
            {studio.name}

            <Button
              value="Delete"
              type={"button"}
              onClick={() => handleDelete(studio._id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studio: state.studio,
});

export default connect(mapStateToProps, { getStudios, deleteStudio })(
  StudiosList
);
