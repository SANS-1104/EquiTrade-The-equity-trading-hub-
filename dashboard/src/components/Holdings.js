import { React, useState, useEffect } from "react";
import './CSS/main.css';
import axios from "axios";


// import { holdings } from "../data/data";


function Holdings() {

  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings").then((res) =>{
      setAllHoldings(res.data);
      console.log(res.data);
      
    })
  },[])

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className="">
                <td> {stock.name} </td>
                <td> {stock.qty} </td>
                <td> {stock.avg.toFixed(2)} </td>
                <td>{stock.price.toFixed(2)} </td>
                <td>{currVal.toFixed(2)} </td>
                <td className={profClass}> {(currVal - stock.avg * stock.qty).toFixed(2)} </td>
                <td className={profClass}> {stock.net} </td>
                <td className={dayClass}> {stock.day} </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="holdings-item w-1/3">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className=" holdings-item w-1/3">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className=" holdings-item w-1/3">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
}

export default Holdings;
