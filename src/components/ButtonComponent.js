import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {getResults} from "../redux/resultsSlice";
import {urlIp} from '../api/Api';

export function ButtonComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    function clickHandler(e) {
        e.preventDefault();
        dispatch(getResults(urlIp));
        navigate('results');
    }

    return (
        <div>
            <h1>How clean is the air today?</h1>
            <button onClick={clickHandler} >image of button</button>
        </div>
    )
}