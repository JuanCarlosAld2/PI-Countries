import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector,useDispatch} from 'react-redux';
import {cleanCountries} from '../redux/actions'


export default function Countries(){

    const countriesByName = useSelector((state)=>state.countriesByName)
    
    const dispatch = useDispatch()

    useEffect(()=>{
         
        return ()=>{
            dispatch(cleanCountries())
        }
    },[dispatch])

    
    return (
        <div>
            { 

                countriesByName&&
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