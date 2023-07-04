import logo from '../img/mandoblack.png';

function Footer(){ 
    return ( 
        <>
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col item">
                <img src={logo} alt="keycapnav" width="120" height="120"/>
                </div>
                <div class="col-sm-4 col item">
                    <h3><strong>Connect with us</strong></h3>
                    <ul class="footer-links">

                        <br />                  
                    </ul>
                    </div>
                <div class="col-sm-4 col item">
                </div>
            </div>
            <p class="copyright">Hi-Keebs © 2023</p>
        </div>
    </footer>
        </>
    )
}
export default Footer; 