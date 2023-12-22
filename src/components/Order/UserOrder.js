import React, {useState, useEffect } from "react";
import { GetAllToy } from "../hooks/toyHook";
import { DeleteOrder, GetOrderForUser } from '../hooks/orderHook';
import { useAuth } from "../middleware/AuthContext";
import Header from "../share/Header";
import Footer from "../share/Footer";
const UserOrder = () =>{
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
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
            const userOrders = await GetOrderForUser(user.id);
            if(userOrders.length > 0){
            const toys = await GetAllToy();
                // Update the state with the fetched data
                setOrders(userOrders);
                setToys(toys);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, [user._id]);
    
      const getToyName = (toyId) => {
        const toy = toys.find((t) => t._id === toyId);
        return toy ? toy.name : 'Unknown Toy';
      };

    return(
        <>
            <Header />
            <div class="card border-0" style={{marginBottom: "50vh"}}>
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
                        {orders.length > 0 ? null 
                        : (<>
                            <tr>
                                <p>You have no order :'(</p> 
                            </tr>
                        </>)}
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className='row'>
                            <td className='col-md-1'>{index+1}</td>
                            <td className='col'>{user.username}</td>
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
            <Footer/>
        </>
    )
}

export default UserOrder;