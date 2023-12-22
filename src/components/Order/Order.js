import React, {useState, useEffect } from "react";
import { GetAllUser } from "../hooks/userHook";
import { GetAllToy } from "../hooks/toyHook";
import { GetAllOrders, DeleteOrder } from '../hooks/orderHook';

const Order = () =>{
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [toys, setToys] = useState([]);

    const handleDelete = async (id) => {
        try {
            if(window.confirm("Are you sure you want to delete?")){
                await DeleteOrder(id);
                window.location.reload();
            }
        } catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
        try {
            const orders = await GetAllOrders();
            const users = await GetAllUser();
            const toys = await GetAllToy();
            setOrders(orders);
            setUsers(users);
            setToys(toys);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    const getUserName = (userId) => {
        const user = users.find((u) => u._id === userId);
        return user ? user.name : 'Unknown User';
      };
    
      const getToyName = (toyId) => {
        const toy = toys.find((t) => t._id === toyId);
        return toy ? toy.name : 'Unknown Toy';
      };

    return(
        <>
            <div class="card border-0">
                <div class="card-header">
                    <h3 class="card-title text-center">
                        Order List
                    </h3>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr className='row'>
                            <th className='col-md-1'>No.</th>
                            <th className='col'>User</th>
                            <th className='col'>Toy</th>
                            <th className='col-md-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className='row'>
                            <td className='col-md-1'>{index+1}</td>
                            <td className='col'>{getUserName(order.user)}</td>
                            <td className='col'>{getToyName(order.toy)}</td>
                            <td className='col-md-2'>
                                <div class="d-flex gap-2">
                                {/* <ModalForm toys={toys} id={toy._id} index={index} action="edit" categories={categories} branches={branches} /> */}
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={()=>handleDelete(order._id)}
                                >
                                    Delete
                                </button>
                                </div>
                                
                                
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Order;