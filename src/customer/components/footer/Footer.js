import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-gray-800 text-gray-300 text-center mt-10"
        container
        sx={{ py: 3, pb: 5 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-10" item xs={12}>
            <div className="flex flex-col">
            <hr className="mb-4"/>
            <p className="text-lg font-medium mb-1 text-gray-400">Made By Syed Amaan Ali</p>
            <a href="https://github.com/amaan35/e-com-site-project-full-stack" className="mb-1 font-thin text-gray-400 underline">Show this project on GitHub</a>
            <a href="https://www.linkedin.com/in/syed-amaan-ali-24b023297/" className="font-thin text-gray-400 underline">Connect With me on LinkedIn</a>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
