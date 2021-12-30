import react from 'react';
import './section.css';
import InputForm from '../inputForm/inputForm';

function Section(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 section1'>
                    <h1>Invest in stocks,<br/>funds and crypto.</h1>
                    <p className='mb-5'>Follow other investors, invest with any amount of money, build your portfolio.</p>
                    <InputForm/>
                </div>
                <div className='col-md-7'></div>
            </div>
        </div>
    )
}

export default Section;