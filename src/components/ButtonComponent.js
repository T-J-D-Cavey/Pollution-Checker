import {useSelector, useDispatch} from 'react-redux';

import {getResults} from "../redux/resultsSlice";
import {urlIp} from '../api/Api';

// to be deleted after tests:
import { statusSelector } from '../redux/resultsSlice';
import {scoreSelector} from '../redux/resultsSlice';

export function ButtonComponent() {

    const dispatch = useDispatch();
    let scoreTest = useSelector(scoreSelector);
    let statusTest = useSelector(statusSelector);

    
    function clickHandler(e) {
        e.preventDefault();
        // need to call getResults
        dispatch(getResults(urlIp));
        // need to change URL so the results component renders
    }

    console.log(scoreTest, statusTest);

    return (
        <div>
            <h1>How clean is the air today?</h1>
            <button onClick={clickHandler} >image of button</button>
            <div>This is the score: {scoreTest}</div>
            <div>{statusTest}</div>
        </div>
    )
}