import React from "react";
import AddressCard from "../checkout/addresscard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid } from "@mui/material";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt-2">
      <div>
        <h1 className="font-bold text-xl py-6">Delivery to: </h1>
        <AddressCard />
      </div>
      <div className=" py-10">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className=" shadow-xl p-5 border rounded-md"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Men Printed Pure Cotton Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Pink</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Majestic Man</p>
                  <p>Rs 1099</p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
