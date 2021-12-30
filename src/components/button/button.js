import react from 'react';
import './button.css';
function Button (props){
    return(
        <button className='btn button1'>{props.text}</button>
    )
}

export default Button;