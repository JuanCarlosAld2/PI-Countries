import React, { useState } from "react";
import imagen from '../assets/world.svg'
import style from '../styles/Login.module.css'
import { validateEmail } from "./validations";
import { validatepassword } from "./validations";
import Record from "./Record";

export default function Login ({login}) {

    const errorStyle = {
        color: "rgba(255, 0, 0, 0.8)",
    
      };

    const [userData, setUserData] =useState({
        email:"",
        password:"",
    })

    const[errors,setErrors]=useState({  
        email:"",
        password:""
    })

    const[record, setRecord]=useState(false)

    const handleEmail = (e) =>{
        const property = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,[property]:value
        })
        validateEmail({...userData,[property]:value}, setErrors,errors)
    }

    const handlePass = (e) =>{
        const property = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,[property]:value
        })
        validatepassword({...userData,[property]:value}, setErrors,errors)
    }
    const handleSubmit = (e)=>{ // manda indormacion 
        e.preventDefault()
        login(userData)
    }

    const handleRecord = () =>{
        if(record === true){
            setRecord(false)
        }else{
            setRecord(true)
        }
    }

    return(
        <div>
            
            {
                record 
                ?
                    <div>
                        <Record setRecord={setRecord}/>
                    </div>
                :
              
                <form className={style.formlogin} onSubmit={handleSubmit}>
                      <h1 className={style.title}>WELCOME TO THE WORLD</h1>
                <div>
                    <img src={imagen} alt="" />
                </div>
                    <div>
                        <input
                            type = "email"
                            placeholder="Email"
                            name="email"
                            value={userData.email}
                            onChange={handleEmail}
                        />
                        <span style={errorStyle}>{errors.email}</span>
                
                        <input 
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={userData.password}
                            onChange={handlePass}
                        />
                        <span style={errorStyle}>{errors.password}</span>
        
                        <div>
                            {
                                errors.email || errors.password ?null:<button type="submit">Acceder</button>
                            }
                            <button type="button" style={{  margin: "10px" }} onClick={handleRecord}>Registrarse</button>
                        </div>
                
                    </div>  
                </form>
            }
            

        </div>
       
    )
}