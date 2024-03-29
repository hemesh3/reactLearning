import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <h3>Hemesh Pratap Singh</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; All Rights Reserved { new Date().getFullYear() }
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
