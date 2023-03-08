import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {scoreSelector, statusSelector, zoneSelector, changeZone} from '../redux/resultsSlice';
import {LoadingComponent} from './LoadingComponent';
import {ScoreComponent} from './ScoreComponent';
import {zoneArray} from '../api/Api';

export function ResultsComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const score = useSelector(scoreSelector);
    const status = useSelector(statusSelector);
    const zone = useSelector(zoneSelector);

    function clickHandler(e) {
        e.preventDefault();
        navigate('/');
    }

    useEffect(() => {
        if (score <= 50) {
            dispatch(changeZone(0));
        }
        else if (score > 50 && score <= 100) {
            dispatch(changeZone(1));
        }
        else if (score > 100 && score <= 150) {
            dispatch(changeZone(2));
        }
        else if (score > 150 && score <= 200) {
            dispatch(changeZone(3));
        }
        else if (score > 200 & score <= 300) {
            dispatch(changeZone(4));
        }
        else if (score > 300) {
            dispatch(changeZone(5));
        }
        else {
            console.log(`Didn't register an eligible AQI score. Showing as ${score}`);
        }

    }, [])
    
    return (
        status === 'loading' ?
        <div>
            <LoadingComponent />
        </div>
        :
        <div className={zoneArray[zone].color}>
            <div><button onClick={clickHandler}>back icon</button></div>
            <div><ScoreComponent /></div>
            <div className='adviceContainer'>
                <p>The latest air quality index (AQI) rating near you is considered '<span>{zoneArray[zone].Level}', with an AQI range of </span> <span>{zoneArray[zone].AQI}</span></p>
                <h3>Advice for current air quality:</h3>
                <p>{zoneArray[zone].Implications}</p>
                <p>Actions to consider: <span>{zoneArray[zone].Statement}</span></p>
            </div>
        </div>
    )
}