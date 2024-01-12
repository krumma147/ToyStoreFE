import React from "react";
import Header from './share/Header';
import Footer from './share/Footer';
import { useNavigate } from "react-router-dom";
import { AddOrder } from './hooks/orderHook';
import { DeleteCart, RemoveToy } from './CartManage/LocalStorageManage';

const Cart = () => {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    const toyDatas = JSON.parse(localStorage.getItem("Toys"));
    let totalCost = 0;
    
    const GetToy = (id) => {
      return toyDatas.find((toy) => toy._id === id);
    }
    const navigate = useNavigate();

    const handleCheckOut = async () => {
      const bill = {
        ...cart,
        price: totalCost
      }
      // console.log(bill);
      if(window.confirm('Finish shopping?') == true){
        await AddOrder(bill);
        DeleteCart();
      }
    }

    const handleRemoveToy = (id) => {
      if(window.confirm('Are you sure you want to remove this toy?') === true){
        RemoveToy(id);
      }
    }

    const handleCancelCart = () => {
      if(totalCost === 0){
        navigate("/toys");
      }
      if(totalCost > 0 && window.confirm('Are you sure you want to cancel this cart?') === true){
        DeleteCart();
        navigate("/toys");
      }
    }

    const CartBody = (
        <div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.toys.map( (e) => {
                          const data = GetToy(e.toy);
                          totalCost += data.price * e.quantity;
                          return (
                          <tr>
                            <td className="product-thumbnail">
                              <img src={`/images/products/${data.image}`} alt="toy image" class="img-fluid"/>
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{data.name}</h2>
                            </td>
                            <td>{data.price} VND</td>
                            <td>
                              <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: "120px"}}>
                                <div className="input-group-prepend">
                                  <button className="btn-c btn-c-outline-black decrease" type="button">&minus;</button>
                                </div>
                                <input type="text" className="form-control text-center quantity-amount" value={e.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                <div class="input-group-append">
                                  <button className="btn-c btn-c-outline-black increase" type="button">+</button>
                                </div>
                              </div>
                            </td>
                            <td>{data.price * e.quantity} VND</td>

                            <td>
                              <button className="btn-c btn-c-black btn-c-sm"
                                type="button" onClick={()=>handleRemoveToy(e.toy)}
                              >X</button>
                            </td>
                          </tr>)
                        })}
                      </tbody>
                    </table>
                    {cart.toys.length > 0 ? null : (<h3 className="text-danger">The cart is empty!</h3>)}
                  </div>
                </form>
              </div>
        
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <button className="btn-c btn-c-outline-black btn-c-block"
                        onClick={()=>navigate("/toys")}
                      >Back</button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn-c btn-c-outline-black btn-c-block"
                        onClick={()=>handleCancelCart()}
                      >Cancel</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btn-c btn-c-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">Subtotal</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">{totalCost} VND</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">{totalCost} VND</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                          <button className="btn-c btn-c-black btn-c-lg py-3 btn-c-block" 
                            onClick={()=>handleCheckOut()}
                          >Proceed To Checkout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );

    return(
        <>
            <Header/>
            {CartBody}
            <Footer/>
        </>
    )
}

export default Cart;