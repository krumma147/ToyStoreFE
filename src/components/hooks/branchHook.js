import axios from 'axios';

const GetAllBranch = async () =>{
    try {
        const response = await axios.get(`http://toystore-api.onrender.com/branches`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
}

const AddNewBranch = async (branch) => {
    try {
        await axios.post(`http://toystore-api.onrender.com/branches/add/`, branch);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
  };

  const UpdateBranch = async (id, branch) => {
    try {
      await axios.post(`http://toystore-api.onrender.com/branches/edit/${id}`, branch);
    } catch (error) {
      console.error('Error updating category:', error);
    }
};

const GetBranchById = async (id) => {
    try {
        const response = await axios.get(`http://toystore-api.onrender.com/branches/get/${id}`);
        return response.data; // Return the data received from the API
    } catch (error) {
        console.error('Error updating category:', error);
        throw error; // Rethrow the error so that the caller can handle it
    }
}

const DeleteBranch = async (id) => {
    try {
        await axios.delete(`http://toystore-api.onrender.com/branches/delete/${id}`);
    } catch (error) {
        console.error('Error deleting category:', error);
    }
}

export { GetAllBranch, AddNewBranch, UpdateBranch, GetBranchById, DeleteBranch};