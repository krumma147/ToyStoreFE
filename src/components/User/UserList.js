import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetAllUser, DeleteUser} from '../hooks/userHook';
import Loading from "../share/Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await GetAllUser();
      setUsers(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  }

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true);
      await DeleteUser(id);
      fetchData();
      setLoading(false);
    }
  };

  return (
    <>
    {loading && <Loading />}
      <div class="card border-0">
          <div class="card-header">
              <h2 class="card-title text-center">
                User List
              </h2>
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                    <tr className='row'>
                      <th className='col-md-1'>No.</th>
                      <th className='col'>Name</th>
                      <th className='col'>Email</th>
                      <th className='col'>Role</th>
                      <th className='col-md-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id} className="row">
                      <td className='col-md-1'>{index+1}</td>
                      <td className='col'>{user.name}</td>
                      <td className='col'>{user.email}</td>
                      <td className='col'>{user.role}</td>
                      <td className='col-md-2'>
                        <div class="d-flex gap-2">
                          <button
                            type="button"
                            class="btn btn-warning"
                            onClick={()=>handleEdit(user._id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={()=>handleDelete(user._id)}
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

export default UserList;
