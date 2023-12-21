import axios from 'axios';
import { GetBranchById } from './branchHook';
import { GetCategoryById } from './categoryHook';
const GetAllToy = async () =>{
    try {
        const res = await axios.get(`http://toystore-api.onrender.com/toys`);
        const toys = await Promise.all(res.data.map(async (toy) => {
            toy.branch = await GetBranchById(toy.branch);
            toy.category = await GetCategoryById(toy.category);
            return toy;
        }));
        console.log(toys);
        return toys;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
}

const AddNewToy = async (toy) => {
    try {
        await axios.post(`http://toystore-api.onrender.com/toys/add/`, toy);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
  };

  const UpdateToy = async (id, toy) => {
    try {
      await axios.post(`http://toystore-api.onrender.com/toys/edit/${id}`, toy);
    } catch (error) {
      console.error('Error updating category:', error);
    }
};

const GetToyById = async (id) => {
    try {
        const res = await axios.get(`http://toystore-api.onrender.com/toys/get/${id}`);
        return res.data;
      } catch (error) {
        console.error('Error updating category:', error);
      }
}

const DeleteToy = async (id) => {
    try {
        await axios.delete(`http://toystore-api.onrender.com/toys/delete/${id}`);
    } catch (error) {
        console.error('Error deleting category:', error);
    }
}

export { GetAllToy, AddNewToy, UpdateToy, GetToyById, DeleteToy};