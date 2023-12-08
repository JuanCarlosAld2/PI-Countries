const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
import axios from 'axios';

export const createUserCustom = async (dataRecord) => {
  try {
    const createCustom = await axios.post(`${BACKEND_URL}user/create-client`, dataRecord);
    if(createCustom.status === 200){
      return alert("Usuario creado correctamente");
    }
  } catch (error) {
    if(error.response && error.response.status === 400){
      return alert(error.response.data.message);
    }else{
      console.log(error.response.data.message);
    }
      
  }
};

export const getAccess= async (password, email) =>{
  try {
    let response= await axios.post(`${BACKEND_URL}user/get-access`,{password,email})
    let {access} = response.data
  
    return access
  } catch (error) {
    console.log(error);
  }
}
