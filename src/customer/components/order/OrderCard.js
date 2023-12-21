import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg hover:shadow-xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            />
            <div className="ml-5 space-y-2">
              <p>Men Printed Pure Cotton Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs 1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
