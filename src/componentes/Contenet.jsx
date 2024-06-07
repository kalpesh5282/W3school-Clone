
import './Contenet.css';
import adone from './images/ad_top.png'
import adtwo from './images/ad_two.png'
function Contenet(props){
    return(

    <div className='content'>
        <div className="ad-one">
            <img src={adone}></img>
        </div>
        <p className='heading'>{props.title}</p>
        .
        <div className="buttons">
            <button className='home-btn'>Home</button>
            <button className='next-btn'>Next</button>
        </div>
        <div className="div-content">
            <p className='contenet-paragraph'>{props.content}</p>
            {/* <button className='study-btn'>Study our free HTML Tutorial</button> */}
        </div>
        <div className="ad-two">
            <img src={adtwo} alt="" />
        </div>

    </div>
    );
}
export default Contenet;