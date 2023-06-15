import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../../Globals/config';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate=useNavigate();
  const[blogs , setBlogs]=React.useState([]);
  const[loading,setLoading]=React.useState(true);
  const[isdeleting, setIsDeleting]=React.useState(false);
  const[id,setId]=React.useState(null);

  const getblogs=async()=>{
    let res=await axios.get(`${baseUrl}blog-project
    `);
    setBlogs(res.data.reverse());
    setLoading(false);
  };

  const deleteBlog=async(id)=>{
    setId(id);
    setIsDeleting(true);
    await axios.delete(`${baseUrl}blog-project/${id}`);
   // alert("Blog deleted sucessfully");
    getblogs();
    setLoading(false);
  }









  React.useEffect(()=> {
    getblogs();
  },[]);
  return (
    <Box sx={{width:"80%",margin:"0 auto"}}>
      <Typography variant="h3" sx={{my:3, textAlign:"center"}}>Blogs</Typography>
     

    {
      loading ?(
        <Box
        sx={{
          width:"100%",
          height:"60vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
        >
          <CircularProgress/>
          </Box>
      ):(
        <Box
        sx={{display:"flex" ,flexWrap:"wrap",gap:3}}>
        {blogs.map((blog)=>{
          return(
            <Card key ={blog.id}sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{height:140}}
        image={blog.Image}
      />
      <CardContent>
        <Typography gutterBottom sx={{color:"green" ,fontSize:"16px"}}>
          @{blog.Author}
          <Typography gutterBottom variant="h5" component="div">
          {blog.name}
        </Typography>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {blog.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {blog.description.slice(0,100)}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate(`/admin/edit/${blog.id}`) }size="small">edit</Button>
        <Button onClick={()=>deleteBlog(blog.id)} color="warning" size="small">
        {id===blog.id  && isdeleting ? "deleting.....":"delete"}
        </Button>

        
        
      </CardActions>
    </Card>
          );
        })}
      
 

      </Box>
      )
    }
    </Box>
     );
  }
