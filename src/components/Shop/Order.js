import React, {useState, useEffect } from "react";

import { GetAllOrders } from '../hooks/orderHook';

const Order = () =>{
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const orders = await GetAllOrders();
            // Update the state with the fetched data
            setOrders(orders);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    return(
        <>
            <div>
                <div
                    class="container"
                >
                    <h2>Order List</h2>
                    <div
                    class="table-responsive"
                    >
                        {/* <ModalForm toys={toys} action="add" categories={categories} branches={branches} /> */}
                    <table
                        class="table table-primary"
                    >
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">User</th>
                            <th scope="col">Toy</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} class="">
                            <td>{index+1}</td>
                            <td>{order.user}</td>
                            <td>{order.toy}</td>
                            <td>
                                <div class="d-flex gap-2">
                                {/* <ModalForm toys={toys} id={toy._id} index={index} action="edit" categories={categories} branches={branches} /> */}
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    // onClick={()=>handleDelete(toy._id)}
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
                
                </div>
        </>
    )
}

export default Order;