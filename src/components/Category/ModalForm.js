import React, { useState, useEffect } from "react";
import { AddNew, UpdateCategory } from "../hooks/categoryHook";

const ModalForm = ({ categories, id, action, index }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (id && categories && categories.length > 0) {
      let cat = categories.find((cat) => cat._id === id);
      if (cat) {
        setName(cat.name);
      } else {
        setName("");
      }
    } else {
      setName("");
    }
  }, [id, categories]);

  // /Active modal button
  const toggleModel = () => {
    setModal(!modal);
    if(id){
      console.log(id);
    }
  };

  const modalBody = (
    <div class="input-group mb-3">
      <span class="input-group " id="inputGroup-sizing-default">
        Category Name
      </span>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );

  const handleAction = () => {
    let existCategory;
    if (name === "") {
      alert("Category name is required!");
      return;
    }
    if (categories.length > 0) {
      existCategory = categories.find((c) => c.name === name);
      if (!existCategory) {
        const category = {
          name: name,
        };
        if (action === "add") {
          AddNew(category);
        } else if (action === "edit") {
          UpdateCategory(id, category);
        }
        window.location.reload();
      } else {
        alert("Category already exists!");
        setName("");
      }
    }
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className={`btn ${id ? "btn-warning" : "btn-primary"} `}
        data-bs-toggle="modal"
        data-bs-target={`#${action}CategoryModal-${id || "add"}`}
        onClick={toggleModel}
      >
        {id ? "Update" : "Add Category"}
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
