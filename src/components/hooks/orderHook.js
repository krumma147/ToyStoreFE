import axios from "axios";

const API = "http://localhost:3100";

export const GetAllOrders = async () => {
    try {
        const response = await axios.get(`${API}/orders`);
        return response.data;
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

