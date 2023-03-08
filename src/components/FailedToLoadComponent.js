import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function FailedToLoadComponent() {
 
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            navigate('/');
        }, 2000)
        return () => clearInterval(interval)
    }, [])
 
    return (
        <div>
            <h3>Failed to retrieve air pollution data...</h3>
        </div>
    )
}