 import axios from 'axios';

 //const API = "https://toystore-api.onrender.com";
 const API = "http://localhost:3100";
 
const getUserById = async (id) => {
    try {
      const response = await axios.get(`${API}/users/get/${id}`);
      return response.data; // Assuming the user details are in the `data` property of the response
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null; // Handle errors gracefully, e.g., returning null
    }
  };

const userLogin = async (email, password) => {
  console.log('userLogin hook called with:', email, password);

  try {
    const response = await axios.post(`${API}/login`, { email, password });
    console.log('userLogin response:', response.data);

    const { token } = response.data;

    // Đảm bảo rằng token được đặt trong header Authorization của các yêu cầu sau này
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // console.log(response.data);
    return response.data; // Trả về toàn bộ thông tin từ server
  } catch (error) {
    console.error('userLogin error:', error);
    throw error;
  }
};

  const CreateUser = async (user) => {
    try {
      // Make a POST request to create a new user
      await axios.post(`${API}/users/add`, user);
      // Optionally, you can redirect the user or perform any other action upon successful user creation
      } catch (error) {
      console.error('Error creating user:', error);
      }

  }

  const GetAllUser = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get(`${API}/users`);
      // Update the state with the fetched data
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const EditUser = async (id,user) => {
    try {
        // Make a POST request to create a new user
        await axios.post(`{API}/users/edit/${id}`, user);
        // Optionally, you can redirect the user or perform any other action upon successful user creation
    } catch (error) {
    console.error('Error creating user:', error);
  }
  }

  const DeleteUser = async (id) => {
    try {
      await axios.delete(`${API}/users/delete/${id}`);
    } catch (error) {
      console.warn(error);
    }
  };

export { getUserById, userLogin, CreateUser, GetAllUser, EditUser, DeleteUser};