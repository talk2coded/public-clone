import react from 'react';
import './inputForm.css';

function InputForm(){
    return(
       <div>
           <input type="text" className="input1" placeholder='+1 (212) 123 4567'/>
           <button className='btn inputBtn'>Text Me The App</button><br/><br/>

           <a href="#" className='link1'>Tell me everything</a>
       </div> 
    )
}

export default InputForm;