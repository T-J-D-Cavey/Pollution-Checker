import { useSelector } from 'react-redux';

import {scoreSelector, zoneSelector, locationSelector} from '../redux/resultsSlice';
import {zoneArray} from "../api/Api";

export function ScoreComponent() {

    const zone = useSelector(zoneSelector);
    const score = useSelector(scoreSelector);
    const location = useSelector(locationSelector);


    return (
        <div className='scoreContainer'>
            <div>{location}</div>
            <div>{score}</div>
            <div>{zoneArray[zone].Level}</div>
        </div>
    )
}