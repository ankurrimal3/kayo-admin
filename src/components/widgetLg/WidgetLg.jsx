import "./widgetLg.css";
import { userRequest } from "../../requestMethods";
import { useState, useEffect } from "react";


export default function WidgetLg() {
  const [orders,setOrders]=useState([])

  useEffect(()=>{
    const getOrders=async()=>{
      try{
      const res=await userRequest.get("/order")
      setOrders(res.data)
      }
      catch(err) {

      }
    }
    getOrders()
  },[])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map(order=>(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{order.createdAt.substring(0,10)}</td>
          <td className="widgetLgAmount"> Rs {order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>

        ))}
       
        
      </table>
    </div>
  );
}
