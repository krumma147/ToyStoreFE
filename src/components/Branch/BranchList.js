import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import { GetAllBranch, DeleteBranch } from '../hooks/branchHook';
import Loading from "../share/Loading";

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      let response = await GetAllBranch();
      setBranches(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this toy?')){
      setLoading(true);
      await DeleteBranch(id);
      fetchData();
      setLoading(false);
    }
  };

  return (
    <>
    {loading&&<Loading />}
      <div className=''>
        <ModalForm branches={branches} action="add" />
      </div>
      <div class="card border-0">
          <div class="card-header">
              <h3 class="card-title text-center">
                Branch List
              </h3>
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                    <tr className='row'>
                    <th className='col-md-1'>No.</th>
                    <th className='col'>Location</th>
                    <th className='col'>City</th>
                    <th className='col-md-2'>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {branches.map((branch, index) => (
                    <tr key={branch._id} className="row">
                      <td className='col-md-1'>{index + 1}</td>
                      <td className='col'>{branch.location}</td>
                      <td className='col'>{branch.city}</td>
                      <td className='col-md-2'>
                        <div className="d-flex gap-2">
                          <ModalForm
                            branches={branches}
                            id={branch._id}
                            action="edit"
                            fetchData = {()=>fetchData()}
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
    
    </>
  );
};

export default BranchList;
