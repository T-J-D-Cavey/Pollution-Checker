import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import {getResults} from "../redux/resultsSlice";
import {urlIp} from '../api/Api';
import earthFumes from '../resources/earthFumes.svg';

export function ButtonComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResults(urlIp))
    }, [])

    function clickHandler(e) {
        e.preventDefault();
        navigate('results')
    }

    return (
        <div className='buttonContainer'>
            <h1>How clean is the air today?</h1>
            <div className='mainButton'><button onClick={clickHandler}><img src={earthFumes} alt='Earth in fumes'/></button></div>
        </div>
    )
}
