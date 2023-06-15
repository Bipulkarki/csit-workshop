import React from 'react'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Globals/config';
import { Divider, Typography,Box } from '@mui/material';
import axios from 'axios';

const SingleBlog = () => {
const {id}=useParams();
console.log(id);
const[singleBlog,setSingleBlog]=React.useState({});
const getSingleBlog=async()=>{
    let res=await axios.get(`${baseUrl}/blog-project/${id}`);
    setSingleBlog(res.data);
};
React.useEffect(()=>{
    getSingleBlog();


},[]);


  return (
    <div>
        <Box sx={{p:3}}>
            <Typography sx={{fontSize:"20px", fontWeight:"800",textAlign:"center"}}>{singleBlog.name}</Typography>
            <img src={singleBlog.Image} style={{height:"400px",width:"100%"}}/>
            <Typography sx={{pb:2, pt:2}}>{singleBlog.author}</Typography>
               <Divider/>
             <Typography sx={{ pt:3}}>{singleBlog.description}</Typography>
         
            
        </Box>
    </div>
  )
}

export default SingleBlog