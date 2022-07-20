import React,{useState} from 'react'
import styled from 'styled-components';
import Axios from 'axios'
import {Image} from "cloudinary-react"
const Cloud = () => {
  
  const [imageSelected,setImageSelected] = useState('')
  
  const uploadImage=()=>{
    const formData = new FormData();
    formData.append("file",imageSelected)
    formData.append("upload_preset", "oiswvs6h");

  Axios.post('https://api.cloudinary.com/v1_1/motohbaba/image/upload',formData).then((response)=>{
      console.log(response);
    });
  };

  
  return (
    <Container>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>upload Image</button>
      {/* <Image
        cloudName="motohbaba"
        publicId="https://res.cloudinary.com/motohbaba/image/upload/v1658272171/ssutneugyfexqyzolipp.png"
      /> */}
    </Container>
  );
}


const Container = styled.div`
padding-top:30vh;
border:1px solid red;

input{
  border:white;
}
`


export default Cloud;