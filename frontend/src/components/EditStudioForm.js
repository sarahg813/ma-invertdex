import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateStudio, getStudioById } from "../redux/actions/studioActions";

const EditStudioForm = ({ editStudio, getStudioById, studio }) => {
  useEffect(() => {
    getStudioById();
  }, [getStudioById]);

  const { selectedStudio } = studio;

  console.log(selectedStudio);

  return (
    <div>
      <h3>Edit Studio</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studio: state.studio,
});

export default connect(mapStateToProps, { updateStudio, getStudioById })(
  EditStudioForm
);
