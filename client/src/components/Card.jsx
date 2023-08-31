import React from "react"
import style from '../styles/Card.module.css'
import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({name,flag,continent,id,population}){
  
    return ( 
        <article className={style.card}>
          <h3>{name}</h3>
          <Link to={`/detail/${id}`}>
            <img src={flag} alt={`${name}`} />
          </Link>
          
          <dl>
            <div>
              <dt>Continente:</dt>
              <dd>{continent}</dd>
            </div>
          </dl>
          <dl>
            <div>
              {population}
            </div>
          </dl>

        </article>
      );
}