import React, { useState } from "react";
import SinglePackage from "../components/singlePackage"; // Import your SinglePackage component4
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const Navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null); // State to track selected package

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg); // Set the clicked package
  };
  const handlePackagesClick = (pkg) => {
    Navigate("/packages"); // Set the clicked package
  };
  const travelPackages = [
    {
      image: "/assets/explore.png",
      date: "19th Sep",
      destinations: "Amsterdam, Barcelona, Rome, Budapest, Vienna",
      duration: "14 Days, 13 Nights",
      price: "€2,990",
    },
    {
      image: "/assets/explore.png",
      date: "03rd Oct",
      destinations: "Rome, Florence, Venice, Zurich, Paris",
      duration: "13 Days, 12 Nights",
      price: "€2,190",
    },
  ];

  return (
    <Box className="explore-section container-padding">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2%",
        }}
      >
        <Typography variant="h4" component="h2" fontWeight="900" gutterBottom>
          Explore our packages
        </Typography>

        <Box display="flex" gap="20px">
          <IconButton sx={{ background: "#ECEEE9" }}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton sx={{ background: "#ECEEE9" }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          gap: "4%",
          flexDirection: { xs: "column", sm: "row" }, // Mobile: column, larger screens: row
          alignItems: { xs: "center", sm: "flex-start" }, // Centered on mobile
        }}
      >
        {travelPackages.map((pkg, index) => (
          <Card
            className="explore-more-card"
            key={index}
            sx={{
              backgroundImage: `url(${pkg.image})`,
              backgroundSize: "cover",
              width: { xs: "100%", sm: "65%" }, // Full width on mobile, 65% on larger screens
              height: "750px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              marginBottom: { xs: "20px", sm: "0" }, // Add margin between cards on mobile
            }}
          >
            <IconButton
              aria-label="add to favorites"
              sx={{ position: "absolute", top: "15px", right: "15px" }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: "white",
                  fontSize: "2rem",
                }}
              />
            </IconButton>

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#750046",
                  background: "white",
                  padding: "5px",
                  width: "fit-content",
                  borderRadius: "5px",
                  fontWeight: "700",
                }}
              >
                {pkg.date}
              </Typography>
              <Typography variant="h4" fontWeight="900">
                {pkg.destinations}
              </Typography>
              <Typography
                className="package-date"
                variant="body1"
                color="#A5A5A5"
                fontSize="2rem"
              >
                {pkg.duration}
              </Typography>
              <Typography variant="h6" color="#FED7D2">
                from {pkg.price}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Button
                className="btn btn-secondary"
                variant="contained"
                sx={{ padding: "15px 80px !important" }}
                onClick={() => handlePackageClick(pkg)}
              >
                Explore Trip
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box textAlign="center" mt={4}>
        <Button
          className="btn btn-secondary btn-inverse"
          onClick={handlePackagesClick}
        >
          Explore All Packages
        </Button>
      </Box>
      {/* Render SinglePackage component as a pop-up when a package is clicked */}
      {selectedPackage && (
        <Box className="slide-up-modal show">
          <SinglePackage
            tour={selectedPackage} // Pass selected package as props
            onClose={() => setSelectedPackage(null)} // Clear selected package on close
          />
        </Box>
      )}
    </Box>
  );
};

export default Explore;
