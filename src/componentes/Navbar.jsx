
import './Navbar.css';
import './images/w3schools-logo.webp'


function Navbar(){
    return(
        <div className='navbar'>
            <div className="first-nav">
            <div className="logo"></div>
            <div className='nav-item-div'>Turtorial</div>
            <div className='nav-item-div'>Jobs</div>
            <div className='nav-item-div'>Practice</div>
            <div className='nav-item-div'>Contenet</div>
            <div className="search"><input type="search "placeholder='search..' /><span class="material-symbols-outlined" >search</span></div>
            <div className="dark-moode"><span class="material-symbols-outlined">contrast</span></div>
            
            <div className="goal"><span class="material-symbols-outlined"id='icons'>crisis_alert</span><p className='goal-content' >Set Goal</p></div>
            <div className="code"><span class="material-symbols-outlined" id='code-icon'>code</span><p className='spaces'>Spaces</p></div>
            <div className="code"><span class="material-symbols-outlined" id='code-icon'>shopping_cart</span><p className='spaces'>Certified</p></div>
            <button className='sign'>Sign Up</button>
            <button className='login'>Login </button>
            </div>
            <div className="second-nav">
                <div className="inner1">HTML</div>
                <div className="inner">CSS</div>
                <div className="inner">JAVASCRIPT</div>
                <div className="inner">SQL</div>
                <div className="inner">PYTHON</div>
                <div className="inner">JAVA</div>
                <div className="inner">PHP</div>
                <div className="inner">HOW TO</div>
                <div className="inner">W3.CSS</div>
                <div className="inner">C</div>
                <div className="inner">C++</div>
                <div className="inner">C#</div>
                <div className="inner">Bootstrap</div>
                <div className="inner">REACT</div>
                <div className="inner">MYSQL</div>
                <div className="inner">REACT</div>
            </div>
        </div>
    );
}

export default Navbar;