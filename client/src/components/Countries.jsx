import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector,useDispatch} from 'react-redux';
import {cleanCountries} from '../redux/actions'
import imageNodFound from '../img/map3.jpg'


export default function Countries(){
    
    //Estado global 
    const countriesByName = useSelector((state)=>state.countriesByName)
    
    //hooks
    const dispatch = useDispatch()

    //useEfect limpia el componte al desmonarse
    useEffect(()=>{
         
        return ()=>{
            dispatch(cleanCountries())
        }
    },[dispatch])

    
    return (
        <div>
            { 

                countriesByName.length === 0 ? 
                    <div>
                        <h2>Pais no encontardo</h2>
                        <img src={imageNodFound}  style={{width:"100%", height:"100%"}}/>
                    </div>
                :
                    countriesByName.map((el)=>(
                        <Card
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            flag={el.flag}
                            continent={el.continent}
                        />
                ))  
            }
        </div>
    )
}