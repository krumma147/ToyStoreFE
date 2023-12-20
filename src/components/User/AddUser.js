import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getUserById } from '../hooks/userHook';
//NOTE: Add validatation

const AddUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    if (id) {
        

        const fetchUserDetails = async () => {
            const user = await getUserById(id);
        
            if (user) {
              // Assuming user has `name` and `email` properties
              setName(user.name);
              setEmail(user.email);
            } else {
              // Handle the case where the user is not found or there is an error
              console.log('User not found or error fetching user details.');
            }
          };
          fetchUserDetails();
        }

        const handleSubmit = async (e) => {
            let user = {
                name : name,
                email:  email,
                password: password
            }
            if(password === '') {
                console.warn("Invalid password");
            }
            if(password !== repassword)
                console.warn("Password and Re-password do not match");
            try {
            // Make a POST request to create a new user
            await axios.post('http://localhost:3100/users/add', user);
            // Optionally, you can redirect the user or perform any other action upon successful user creation
            } catch (error) {
            console.error('Error creating user:', error);
            }

            navigate('/users');
        };

        const handleEdit = async (e) => {
            let user = {
                name : name,
                email:  email,
                password: password
            }
            if(password === '') {
                console.warn("Invalid password");
            }
            if(password !== repassword)
                console.warn("Password and Re-password do not match");
            try {
                // Make a POST request to create a new user
                await axios.post(`http://localhost:3100/users/edit/${id}`, user);
                // Optionally, you can redirect the user or perform any other action upon successful user creation
            } catch (error) {
            console.error('Error creating user:', error);
            }
            await navigate('/users');
        };

  const editForm = (
        <form onSubmit={handleEdit}>
            <div class="mb-3">
                <label for="" class="form-label">Full Name</label>
                <input
                    type="text" value={name} onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    placeholder="Full Name"
                />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Re-Password</label>
                <input
                    type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>

            <button className="btn btn-primary" type="submit">Edit</button>
        </form>
  );

  const addForm = (
    <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Full Name</label>
                <input
                    type="text" value={name} onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    placeholder="Full Name"
                />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Re-Password</label>
                <input
                    type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)}
                    class="form-control"
                    placeholder="Email Address"
                />
            </div>

            <button className="btn btn-primary" type="submit">Create User</button>
        </form>
  )


  return (
    <div className="container"> 
        <h2>Create New Account</h2>
          {
            id ? editForm : addForm
          }
    </div>
  )
};

export default AddUser;