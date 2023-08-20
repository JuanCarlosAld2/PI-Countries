import React from "react";
import Card from "./Card";


// eslint-disable-next-line react/prop-types
export default function Cards({allCountries,currentPage,nextHandler,prevHandler}) {
    
    
    return(
        <div>
            
            {allCountries &&
                // eslint-disable-next-line react/prop-types
                allCountries.map((el)=>(
                    <Card
                        key= {el.id}
                        id = {el.id}
                        name={el.name}
                        flag={el.flag}
                        continent={el.continent}
                        capital={el.capital}
                        subregion={el.subregion}
                        area={el.area}
                        population={el.population}
                    />

                ))
            
            }
            <h2>Pagina:{currentPage}</h2>
            <div>
                <button onClick={prevHandler}>previus</button>
                <button onClick={nextHandler}>next</button>
                
            </div>
       
        
        
        </div>
    )
}