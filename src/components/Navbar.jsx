import React from 'react';

const Navbar = () => {
  return(
    <>
        <section className="navbar">
            <div className="nav-logo-text">
                <div >
                    <img className="inshortsLogo" src="./images/inshortslogo.png" alt="logo" />
                </div>
                <div className="navtext">
                    <a href="http://www.inshorts.com/en/read" target="_blank">Read Now</a>
                    <a href="https://inshorts.zohorecruit.com/careers" target="_blank">Careers</a>
                    <a href="https://blog.inshorts.com/" target="_blank">Blog</a>
                </div>
            </div>
        </section>
    </>
  );
};

export default Navbar;