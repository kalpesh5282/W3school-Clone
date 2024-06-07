import './Footer.css';


function Footer(){
    return(
        <div className='main-footer'>
                 <footer class="w3schools-footer">
        <div class="footer-container">
            <div class="footer-links">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Advertise</a>
                <a href="#">Cookie Policy</a>
            </div>
        
            <div class="footer-copyright">
                <p>&copy; 2024 W3Schools. All Rights Reserved.</p>
                <p>Devloped By Kalpesh Patil</p>
                <p className='email'>Email:- <a href="https://mail.google.com/mail/u/0/#inbox" className='email-link'>patilkalpesh5282@gmail.com</a></p>
            </div>
        </div>
    </footer>
        </div>
    );
}
export default Footer;