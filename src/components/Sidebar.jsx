import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

const Sidebar = (props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => {
        return (
          <button
            key={cat.name}
            className="category-btn"
            onClick={()=>props.handleClick(cat.name)}
            style={{
              background: cat.name === props.selectedCatagory && "#FC1503",
              color: "white",
            }}
          >
            <span
              style={{
                color: cat.name === props.selectedCatagory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {cat.icon}
            </span>
            <span style={{ opacity: cat.name === props.selectedCatagory ? "1" : "0.8" }}>
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
