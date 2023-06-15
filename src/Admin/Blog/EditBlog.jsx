import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Input, TextField, Typography } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../Globals/config";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
  const navigate = useNavigate();

  const [singleBlog, setSingleBlog] = React.useState({
    Title: "",
    Author: "",
    Image: "",
    description: "",
  });
  const getSingleBlog = async () => {
    let res = await axios.get(`${baseUrl}/blog-project/${id}`);
    console.log(res.data)
    setSingleBlog(res.data);
  };
  React.useEffect(() => {
    getSingleBlog();
  }, []);

  const { id } = useParams();



  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${baseUrl}blog-project/${id}`, singleBlog);
    navigate("/admin");
  };

  return (
    <Box
      component="form"
      sx={{ display: "grid", gap: 5 }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        id="filled-basic"
        variant="filled"
        name="name"
        onChange={(e) => setSingleBlog({ ...singleBlog, title: e.target.value })}
        value={singleBlog.name}
      />
      <Input
        type="url"
        id="filled-basic"
        variant="filled"
        name="Image"
        onChange={(e) => setSingleBlog({ ...singleBlog, image: e.target.value })}
        value={singleBlog.Image}
      />
      <Input
        placeholder={singleBlog.author}
        id="filled-basic"
        variant="filled"
        name="Author"
        onChange={(e) => setSingleBlog({ ...singleBlog, author: e.target.value })}
        value={singleBlog.Author}
      />
      <Input
        placeholder={singleBlog.description}
        id="filled-basic"
        label="description"
        variant="filled"
        name="description"
        onChange={(e) =>
          setSingleBlog({ ...singleBlog, description: e.target.value })
        }
        value={singleBlog.description}
      />
      <Button type="submit" variant="contained">
        Edit blog
      </Button>
    </Box>
  );
}