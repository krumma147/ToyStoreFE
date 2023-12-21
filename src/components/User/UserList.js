import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetAllUser} from '../hooks/userHook';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await GetAllUser();
        // Update the state with the fetched data
        setUsers(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  }

  const handleDelete = async (id) => {
    //UNDONE: Confirmation & FIX 404 ERROR
    await axios.delete(`http://localhost:3100/users/delete/${id}`);
  };

  return (
    <div>
      <div
        class="container"
      >
        <h2>User List</h2>
        <div
          class="table-responsive"
        >
          <table
            class="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} class="">
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <div class="d-flex gap-2">
                      <button
                        type="button"
                        class="btn btn-success"
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
      
    </div>
  );
};

export default UserList;
