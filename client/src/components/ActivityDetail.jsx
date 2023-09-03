import React from "react";
import {useSelector} from 'react-redux';
import style from '../styles/ActivityDetail.module.css'
export default function activityDetail () {
    const showActivity = useSelector((state)=> state.showActivity)
    return(
        <div className={style.activitycardcontainer}>
            {
                showActivity &&
                    showActivity.map(element => (
                        <div key={element.id} className={style.activitycard}>
                            <dt>name:</dt>
                            <dd>{element.name}</dd>
                            <dt>difficulty:</dt>
                            <dd>{element.difficulty}</dd>
                            <dt>duration:</dt>
                            <dd>{element.duration}</dd>
                            <dt>season:</dt>
                            <dd>{element.season}</dd>
                        </div>
                    ))
            }
        </div>
    )
}