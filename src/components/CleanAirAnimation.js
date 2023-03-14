import sunIcon from '../resources/sunIcon.svg';
import cloudOne from '../resources/cloudOne.svg';
import cloudTwo from '../resources/cloudTwo.svg';

export function CleanAirAnimation() {
    return (
        <div className='cleanContainer'>
            <div><img  src={cloudOne} alt='clouds'/></div>
            <div className='sun'><img src={sunIcon} alt='sun'/></div>
            <div><img  src={cloudTwo} alt='clouds'/></div>
        </div>
    )
}