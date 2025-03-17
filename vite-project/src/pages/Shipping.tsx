import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../redux/reducer/cartReducer";
import { RootState, server } from "../redux/store";

function Shipping() {
  const [shippingInfo,setShippingInfo] = useState({
    state:'',
    address:'',
    city:'',
    country:"",
    pincode:""
  })
  
  const changeHandler = (e: ChangeEvent <HTMLInputElement | HTMLSelectElement>) =>{
    setShippingInfo((prev) =>({...prev, [e.target.name]:e.target.value}))
  }; 
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <div className="shipping">
  <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>
      <form action="">
        <h1>Shipping Address</h1>
        <input type="text" required placeholder="Address" name="address" value={shippingInfo.address} onChange={changeHandler} />
        <input type="text" required placeholder="City" name="city" value={shippingInfo.city} onChange={changeHandler} />
        <input type="text" required placeholder="State" name="state" value={shippingInfo.state} onChange={changeHandler} />
        <input type="number" required placeholder="Pincode" name="pincode" value={shippingInfo.pincode} onChange={changeHandler} />
        <select name="country" required value={shippingInfo.country} onChange={changeHandler} id="">
          <option value="">Choose country</option>
          <option value="india">India</option>
        </select>
        <input type="text" required placeholder="Country" name="country" value={shippingInfo.country} onChange={changeHandler} />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  ) 
}

export default Shipping