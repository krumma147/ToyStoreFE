import axios from 'axios';
import { GetBranchById } from './branchHook';
import { GetCategoryById } from './categoryHook';

const API = "https://toystore-api.onrender.com";
//const API = "http://localhost:3100";

const GetAllToy = async () =>{
    try {
        const res = await axios.get(`${API}/toys`);
        const toys = await Promise.all(res.data.map(async (toy) => {
            toy.branch = await GetBranchById(toy.branch);
            toy.category = await GetCategoryById(toy.category);
            return toy;
        }));
        return toys;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
}

const AddNewToy = async (toy) => {
    try {
        await axios.post(`${API}/toys/add/`, toy);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
    }
  };

  const UpdateToy = async (id, toy) => {
    try {
      await axios.post(`${API}/toys/edit/${id}`, toy);
    } catch (error) {
      console.error('Error updating category:', error);
    }
};

const GetToyById = async (id) => {
    try {
        const res = await axios.get(`${API}/toys/get/${id}`);
        return res.data;
      } catch (error) {
        console.error('Error updating category:', error);
      }
}

const DeleteToy = async (id) => {
    try {
        await axios.delete(`${API}/toys/delete/${id}`);
    } catch (error) {
        console.error('Error deleting category:', error);
    }
}

export { GetAllToy, AddNewToy, UpdateToy, GetToyById, DeleteToy};