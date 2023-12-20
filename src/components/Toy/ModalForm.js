import React, { useState, useEffect } from "react";
import { AddNewToy, UpdateToy } from '../hooks/toyHook';

const ModalForm = ({ toys, id, action, index , categories, branches }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (id && toys && toys.length > 0) {
      let toy = toys.find((toy) => toy._id === id);
      if (toy) {
        setName(toy.name);
        setPrice(toy.price);
        setBranch(toy.branch.name);
        setImage(toy.image);
        setCategory(toy.category.name);
      } else {
        setName("");
        setPrice("");
        setBranch("");
        setImage("");
        setCategory("");
      }
    } else {
        setName("");
        setPrice("");
        setBranch("");
        setImage("");
        setCategory("");
    }
  }, [id, toys]);

  // /Active modal button
  const toggleModel = () => {
    setModal(!modal);
    if(id){
      console.log(id);
    }
  };
  
  // Btn handler
  const handleAction = () => {
    if (name === "" || price === "" || image === "" || branch === "" || category === "") {
      alert("All input fields are required!");
      return;
    }
  
    const existtoy = toys.find((c) => c.name === name);
    if (!existtoy || (action === "edit" && existtoy._id === id)) {
      const toy = {
        name: name,
        price: price,
        image: image,
        branch: branch,
        category: category
      };
  
      if (action === "add") {
        AddNewToy(toy);
      } else if (action === "edit") {
        UpdateToy(id, toy);
      }
      
      window.location.reload();
    } else {
      alert("Toy already exists!");
      setName("");
      setPrice("");
      setBranch("");
      setImage("");
      setCategory("");
    }
  };

  const handleCancel = () => {
    setModal(false);
    if(!id){
        setName("");
        setPrice("");
        setBranch("");
        setImage("");
        setCategory("");
    }
  };
  
  const modalBody = (
    <div class="input-group mb-3">
      <span class="input-group " id="inputGroup-sizing-default">
        Toy Name
      </span>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />

        <span className="input-group" id="inputGroup-sizing-default">
            Toy Price
        </span>
        <input
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            value={price}
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
        />

        <span className="input-group" id="inputGroup-sizing-default">
            Toy Category
        </span>
        <select
        className="form-select"
        aria-label="Default select categories"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        >
        <option value="" disabled>
            Select a category
        </option>
        {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
            {cat.name}
            </option>
        ))}
        </select>

        <span className="input-group" id="inputGroup-sizing-default">
            Toy Branch
        </span>
        <select
            className="form-select"
            aria-label="Default select branches"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
            >
            <option value="" disabled>
                Select a branch
            </option>
            {branches.map((b) => (
                <option key={b._id} value={b._id}>
                {b.location}, {b.city}
                </option>
            ))}
        </select>

        <span className="input-group" id="inputGroup-sizing-default">
            Toy Image
        </span>
        <input
            onChange={(e) => setImage(e.target.files[0].name)}
            type="file"
            className="form-control"
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
