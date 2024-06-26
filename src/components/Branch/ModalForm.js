import React, { useState, useEffect } from "react";
import {AddNewBranch, UpdateBranch} from '../hooks/branchHook';
import Loading from "../share/Loading";

const ModalForm = ({ branches, id, action, fetchData }) => {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (id && branches && branches.length > 0) {
      let branch = branches.find((branch) => branch._id === id);
      if (branch) {
        setLocation(branch.location);
        setCity(branch.city);
      } else {
        setLocation("");
        setCity("");
      }
    } else {
        setLocation("");
        setCity("");
    }
  }, [id, branches]);

  const toggleModel = () => {
    setModal(!modal);
  };
  
  const handleAction = async () => {
  if (location === "" || city === "") {
    alert("All input fields are required!");
    return;
  }

  let existBranch;
  existBranch = branches.find((c) => c.location === location && c.city === city);
  if (!existBranch) {
    const branch = {
      location: location,
      city: city
    };
    setLoading(true);
    if (action === "add") {
      await AddNewBranch(branch);
      window.location.reload();
    } 
    if (action === "edit") {
      await UpdateBranch(id, branch);
      fetchData();
      setLoading(false);
    }
    handleCancel();
  } else {
    alert("Branch already exists!");
    setLocation("");
    setCity("");
  }
};

  const handleCancel = () => {
    setModal(false);
  };
  
  
  const modalBody = (
    <div class="input-group mb-3">
      <span class="input-group " id="inputGroup-sizing-default">
        Branch Location
      </span>
      <input
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />

      <span class="input-group " id="inputGroup-sizing-default">
        Branch City
      </span>
      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );

  return (
    <div>
      {loading&& <Loading />}
      <button
        type="button"
        className={`btn ${id ? "btn-warning" : "btn-primary"} `}
        data-bs-toggle="modal"
        data-bs-target={`#${action}BranchModal-${id || "add"}`}
        onClick={toggleModel}
      >
        {id ? "Update" : "Add Branch"}
      </button>
      
      <div
        className={`modal fade ${modal ? "show" : ""}`}
        id={`${action}BranchModal-${id || "add"}`}
        tabIndex="-1"
        aria-labelledby={`${action}BranchModalLabel`}
        aria-hidden={!modal}
      >
        <div className={`modal-dialog ${modal ? "" : "display-none"}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${action}BranchModalLabel`}>
                {action === "add" ? "Add New" : "Edit"} Branch
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancel}
              ></button>
            </div>
            <div className="modal-body">{modalBody}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAction} >
                {action === "add" ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
