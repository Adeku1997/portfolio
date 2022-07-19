import React,{useState} from 'react'
import styled from 'styled-components';
import Axios from 'axios'

const Cloud = () => {
  
  const [imageSelected,setImageSelected] = useState('')
  
  const uploadImage=()=>{
    const formData = new formData()
    formData.append("file",imageSelected)
    formData.append("upload_preset", "oiswvs6h");

    Axios.post('https://api.cloudinary.com/v1_1/motohbaba/image/upload',formData).then((response)=>{
      console.log(response);
    });
  };

  
  return (
    <Container>
        <input type='file' onChange={(event)=> {setImageSelected(event.target.files[0])}}/>
        <button onClick = {uploadImage}>upload Image</button>
    </Container>
  )
}


const Container = styled.div`
padding-top:30vh;
border:1px solid red;

input{
  border:white;
}
`


export default Cloud;