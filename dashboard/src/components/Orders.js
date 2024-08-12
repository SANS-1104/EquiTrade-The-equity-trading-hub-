import React from "react";
import { Link } from 'react-router-dom';

function Orders() {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't Placed any Orders Today...</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Orders;