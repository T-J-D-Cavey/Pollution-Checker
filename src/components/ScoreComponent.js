import { useSelector } from 'react-redux';

import {scoreSelector, statusSelector, zoneSelector, changeZone} from '../redux/resultsSlice';
import {zoneArray} from "../api/Api";

export function ScoreComponent() {

    const zone = useSelector(zoneSelector);

    return (
        <div>This is a test of zone state: Zone AQI is {zoneArray[zone].AQI}</div>
    )
}