import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {scoreSelector, statusSelector, zoneSelector, changeZone} from '../redux/resultsSlice';
import {LoadingComponent} from './LoadingComponent';
import {AdviceComponent} from './AdviceComponent';

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

    
// need do to a ternary operator that if status shows as pending, show a pending componant, otherwise show the results componant:
    return (
        status === 'loading' ?
        <div>
            <LoadingComponent />
        </div>
        :
        <div className={zone}>
            <div><button onClick={clickHandler}>back icon</button></div>
            <div>{score}</div>
            <div><AdviceComponent /></div>
        </div>
    )
}