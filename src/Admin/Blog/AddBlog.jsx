import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../Globals/config";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
        name: data.get("name"),
      Title: data.get("title"),
      Image: data.get("image"),
      description: data.get("description"),
      Author: data.get("author"),
   
     
    };
    console.log(formData);
    await axios.post(`${baseUrl}blog-project`, formData);
    navigate('/admin/')
  };
  return (
    <Box
      component="form"
      sx={{ display: "grid", gap: 5 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="filled-basic"
        label="title"
        variant="filled"
        name="title"
      />
      <TextField
        type="url"
        id="filled-basic"
        label="image url"
        variant="filled"
        name="image"
      />
      <TextField
        id="filled-basic"
        label="author"
        variant="filled"
        name="author"
      />
      <TextField
        id="filled-basic"
        label="description"
        variant="filled"
        name="description"
      />
      <Button type="submit" variant="contained">
        Add blog
      </Button>
    </Box>
  );
}