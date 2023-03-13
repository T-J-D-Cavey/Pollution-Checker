import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import {scoreSelector, statusSelector, zoneSelector, linkSelector, changeZone} from '../redux/resultsSlice';
import {FailedToLoadComponent} from './FailedToLoadComponent';
import {ScoreComponent} from './ScoreComponent';
import {zoneArray} from '../api/Api';
import {CardComponent} from './CardComponent';
import backIcon from '../resources/backIcon.svg';

export function ResultsComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const score = useSelector(scoreSelector);
    const status = useSelector(statusSelector);
    const zone = useSelector(zoneSelector);
    const link = useSelector(linkSelector);

    useEffect(() => {
        if (score === 'refresh') {
            navigate('/')
        }
        else if (score <= 50) {
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
            navigate('/');
        }

    }, [])
    
    return (
        status === 'failed' ?
        <div>
            <FailedToLoadComponent />
        </div>
        :
        <div className={zoneArray[zone].color}>
            <Link to='/'><button><img className='backButton' src={backIcon} alt='back arrow' /></button></Link>
            <div id='scoreID'><ScoreComponent /></div>
            <div className='adviceContainer'>
                <p>The latest air quality index (AQI) rating <a href={link} target='_blank'>near you</a> is considered '<span>{zoneArray[zone].Level}', with an AQI range of </span> <span>{zoneArray[zone].AQI}</span></p>
                <h3>Advice for current air quality:</h3>
                <p>{zoneArray[zone].Implications}</p>
                <p>Actions to consider: <span>{zoneArray[zone].Statement}</span></p>
                <CardComponent />
            </div>
        </div>
    )
}