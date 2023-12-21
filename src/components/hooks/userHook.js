import axios from 'axios';

const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://toystore-api.onrender.com/users/get/${id}`);
      return response.data; // Assuming the user details are in the `data` property of the response
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null; // Handle errors gracefully, e.g., returning null
    }
  };

const userLogin = async (email, password) => {
    console.log('userLogin hook called with:', email, password);
    try {
      const user = {
        email: email,
        password: password
      }
      const response = await axios.post('http://toystore-api.onrender.com/login', user);
      console.log('userLogin response:', response.data);
      return response.data;
    } catch (error) {
      console.error('userLogin error:', error);
      throw error;
    }
  };

  const CreateUser = async (user) => {
    try {
      // Make a POST request to create a new user
      await axios.post('http://toystore-api.onrender.com/users/add', user);
      // Optionally, you can redirect the user or perform any other action upon successful user creation
      } catch (error) {
      console.error('Error creating user:', error);
      }

  }

export { getUserById, userLogin, CreateUser};