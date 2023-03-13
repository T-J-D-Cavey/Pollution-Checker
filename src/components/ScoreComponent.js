import { useSelector } from 'react-redux';

import {scoreSelector, zoneSelector, locationSelector, linkSelector} from '../redux/resultsSlice';
import {zoneArray} from "../api/Api";

export function ScoreComponent() {

    const zone = useSelector(zoneSelector);
    const score = useSelector(scoreSelector);
    const location = useSelector(locationSelector);
    const link = useSelector(linkSelector);


    return (
        <div className='scoreContainer'>
            <a className='scoreBox' href={link} target='_blank'>
                <div>{location}</div>
                <div>{score}</div>
                <div>{zoneArray[zone].Level}</div>
            </a>
        </div>
    )
}