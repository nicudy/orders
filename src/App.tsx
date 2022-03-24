import React from 'react';
import { Button } from "@mui/material";
import placeOrder from "./placeOrder";

function App() {
  return (
    <div>
      <h1>Orders</h1>
      <Button
        variant="contained"
        onClick={() => {
          placeOrder();
        }}
      >
        Place Order
      </Button>
    </div>
  );
}

export default App;
