import axios from "axios";

const API = "https://toystore-api.onrender.com";
// const API = "http://localhost:3100";

export const GetAllOrders = async () => {
    try {
        const response = await axios.get(`${API}/orders`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetOrderForUser = async (uid) => {
    try {
        const res = await GetAllOrders();
        const orders = res.filter((e)=>e.user === uid);
        return orders;
    } catch (error) {
        console.log(error);
    }
} 


export const AddOrder = async (order) => {
    try {
        const response = await axios.post(`${API}/orders/add`, order);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteOrder = async (id) => {
    try {
        await axios.delete(`${API}/orders/delete/${id}`);
    } catch (error) {
        console.log(error);
    }
}

