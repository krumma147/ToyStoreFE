import axios from 'axios';

const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3100/users/get/${id}`);
      return response.data; // Assuming the user details are in the `data` property of the response
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null; // Handle errors gracefully, e.g., returning null
    }
  };

const userLogin = async (email, password) => {
    console.log('userLogin hook called with:', email, password);
    try {
      const response = await axios.post('http://localhost:3100/login', { email, password });
      console.log('userLogin response:', response.data);
      return response.data;
    } catch (error) {
      console.error('userLogin error:', error);
      throw error;
    }
  };

export { getUserById, userLogin };