import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function PageNotFound() {
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const interval = setInterval(() => {
            navigate('/');
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className='FailedToLoadContainer'>
            <h3>Page not found...</h3>
        </div>
    )
}



 