import React from "react";
import { useParams } from "react-router-dom"
import {getCountriesDetail,cleanDetail} from '../redux/actions'
import { useDispatch,useSelector} from 'react-redux';
import { useEffect} from 'react';

export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const Country = useSelector((state)=> state.countryDetail)

    useEffect(()=>{
        dispatch(getCountriesDetail(id))
        return ()=>{
            dispatch(cleanDetail())
        }
    },[dispatch, id])
    return(
        <div>
            <article>
            <h3>{Country.name}</h3>
          <img src={Country.flag} alt={`${Country.name}`} />
          <dl>
            <div>
              <dt>Continente:</dt>
              <dd>{Country.continent}</dd>
            </div>
            <div>
              <dt>Capital:</dt>
              <dd>{Country.capital}</dd>
            </div>
            <div>
              <dt>Subregion:</dt>
              <dd>{Country.subregion}</dd>
            </div>
            <div>
              <dt>area:</dt>
              <dd>{Country.area}</dd>
            </div>
            <div>
              <dt>Population:</dt>
              <dd>{Country.population}</dd>
            </div>

          </dl>
            </article>
        </div>
    )
}