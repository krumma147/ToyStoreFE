import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import { GetAllBranch, DeleteBranch } from '../hooks/branchHook';

const BranchList = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllBranch(); // Call the function and await the response
        setBranches(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    DeleteBranch(id);
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2>Branch List</h2>
        <div className="table-responsive">
          <ModalForm branches={branches} action="add" />
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Location</th>
                <th scope="col">City</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch, index) => (
                <tr key={branch._id} className="">
                  <td>{index + 1}</td>
                  <td>{branch.location}</td>
                  <td>{branch.city}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <ModalForm
                        branches={branches}
                        id={branch._id}
                        index={index}
                        action="edit"
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(branch._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchList;
