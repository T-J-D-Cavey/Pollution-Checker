import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {scoreSelector, statusSelector, zoneSelector, changeZone} from '../redux/resultsSlice';

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
            dispatch(changeZone('Normal'));
        }
        else if (score > 50 && score <= 100) {
            dispatch(changeZone('Moderate'));
        }
        else if (score > 100 && score <= 150) {
            dispatch(changeZone('Unhealthy for Sensitive Groups'));
        }
        else if (score > 150 && score <= 200) {
            dispatch(changeZone('Unhealthy'));
        }
        else if (score > 200 & score <= 300) {
            dispatch(changeZone('Very Unhealthy'));
        }
        else if (score > 300) {
            dispatch(changeZone('Hazardous'));
        }
        else {
            console.log(`Didn't register an eligible AQI score. Showing as ${score}`);
        }

    }, [])

    
// need do to a ternary operator that if status shows as pending, show a pending componant, otherwise show the results componant:
    return (
        <div>
            <div><button onClick={clickHandler}>back icon</button></div>
            <div>{score}</div>
        </div>
    )
}