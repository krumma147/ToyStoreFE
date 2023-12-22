import axios from 'axios';

const API = "https://toystore-api.onrender.com";

const GetAllBranch = async () =>{
    try {
        const response = await axios.get(`${API}/branches`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
}

const AddNewBranch = async (branch) => {
    try {
        await axios.post(`${API}/branches/add/`, branch);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
  };

  const UpdateBranch = async (id, branch) => {
    try {
      await axios.post(`${API}/branches/edit/${id}`, branch);
    } catch (error) {
      console.error('Error updating category:', error);
    }
};

const GetBranchById = async (id) => {
    try {
        const response = await axios.get(`${API}/branches/get/${id}`);
        return response.data; // Return the data received from the API
    } catch (error) {
        console.error('Error updating category:', error);
        throw error; // Rethrow the error so that the caller can handle it
    }
}

const DeleteBranch = async (id) => {
    try {
        await axios.delete(`${API}/branches/delete/${id}`);
    } catch (error) {
        console.error('Error deleting category:', error);
    }
}

export { GetAllBranch, AddNewBranch, UpdateBranch, GetBranchById, DeleteBranch};