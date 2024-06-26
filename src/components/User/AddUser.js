import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, CreateUser, EditUser } from '../hooks/userHook';
import Loading from '../share/Loading';
//NOTE: Add validatation

const AddUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    if (id) {
        

        const fetchUserDetails = async () => {
            const user = await getUserById(id);
        
            if (user) {
              // Assuming user has `name` and `email` properties
              setName(user.name);
              setEmail(user.email);
              setRole(user.role);
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
            setLoading(true);
            await CreateUser(user);
            setLoading(false);
            navigate('/admin');
        };

        const handleEdit = async (e) => {
            let user = {
                name : name,
                email:  email,
                password: password,
                role: role
            }
            if(password === '') {
                console.warn("Invalid password");
            }
            if(password !== repassword)
                console.warn("Password and Re-password do not match");
            setLoading(true);
            try {
                await EditUser(id, user);
            } catch (error) {
            console.error('Error creating user:', error);
            }
            setLoading(false);
            navigate('/admin');
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
                    placeholder="Password"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Re-Password</label>
                <input
                    type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)}
                    class="form-control"
                    placeholder="Re-enter Password"
                />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Role</label>
                <select class="form-select" aria-label="select"
                    onChange={(e)=>setRole(e.target.value)}
                >
                    <option value="user" selected>User</option>
                    <option value="admin">Admin</option>
                </select>
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
                    placeholder="Password"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Re-Password</label>
                <input
                    type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)}
                    class="form-control"
                    placeholder="Re-enter Password"
                />
            </div>

            <button className="btn btn-primary" type="submit">Create User</button>
        </form>
  )


  return (
    <div className="container"> 
    {loading && <Loading/>}
        <h2>{
            id ? "Edit Account": "Create New Account"
          }
        </h2>
          {
            id ? editForm : addForm
          }
    </div>
  )
};

export default AddUser;