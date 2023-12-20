import React, { useState, useEffect } from "react";
import {AddNewBranch, UpdateBranch} from '../hooks/branchHook';

const ModalForm = ({ branches, id, action, index }) => {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");

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

  // /Active modal button
  const toggleModel = () => {
    setModal(!modal);
    // if(id){
    //   console.log(id);
    // }
  };
  
  // Btn handler
  const handleAction = () => {
      if (location === "" && city === "") {
          alert("All input fields are required!");
          return;
        }
        let existBranch;
    if (branches.length > 0) {
      existBranch = branches.find((c) => c.location === location && c.city === city);
      if (!existBranch) {
        const branch = {
            location: location,
            city: city
        };
        console.log(branch);
        if (action === "add") {
            AddNewBranch(branch);
        } else if (action === "edit") {
            UpdateBranch(id, branch);
        }
        window.location.reload();
      } else {
        alert("Branch already exists!");
        setLocation("");
        setCity("");
      }
    }else{
      const branch = {
        location: location,
        city: city
      };
      if (action === "add") {
          AddNewBranch(branch);
          window.location.reload();
      }
    }
  };

  const handleCancel = () => {
    setModal(false);
  };
  
  
  const modalBody = (
    <div class="input-group mb-3">
      <span class="input-group " id="inputGroup-sizing-default">
        Branch Locatiom
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
      <button
        type="button"
        className={`btn ${id ? "btn-warning" : "btn-primary"} `}
        data-bs-toggle="modal"
        data-bs-target={`#${action}CategoryModal-${id || "add"}`}
        onClick={toggleModel}
      >
        {id ? "Update" : "Add New"}
      </button>
      
      <div
        className={`modal fade ${modal ? "show" : ""}`}
        id={`${action}CategoryModal-${id || "add"}`}
        tabIndex="-1"
        aria-labelledby={`${action}CategoryModalLabel`}
        aria-hidden={!modal}
      >
        <div className={`modal-dialog ${modal ? "" : "display-none"}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${action}CategoryModalLabel`}>
                {action === "add" ? "Add New" : "Edit"} Category
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
