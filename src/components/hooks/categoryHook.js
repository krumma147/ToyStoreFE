import axios from 'axios';

// const API = "https://toystore-api.onrender.com";
const API = "http://localhost:3100";

const GetAllCategory = async () =>{
    try {
        const response = await axios.get(`${API}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
}

const AddNew = async (category) => {
    try {
        await axios.post(`${API}/categories/add/`, category);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
  };

  const UpdateCategory = async (id, category) => {
    try {
      await axios.post(`${API}/categories/edit/${id}`, category);
    } catch (error) {
      console.error('Error updating category:', error);
    }
};

const GetCategoryById = async (id) => {
    try {
        const res = await axios.get(`${API}/categories/get/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error updating category:', error);
      }
}

const DeleteCategory = async (id) => {
    try {
        await axios.delete(`${API}/categories/delete/${id}`);
    } catch (error) {
        console.error('Error deleting category:', error);
    }
}

export { AddNew, GetAllCategory, UpdateCategory, GetCategoryById, DeleteCategory};