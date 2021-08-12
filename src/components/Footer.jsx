import React from 'react';

const Footer = () =>{
    return(
        <>
        <section className="footer">
            <div className="footer-container">
                <div className="footer-left-container">
                    <h3>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                    <h3>Notification to Vendors</h3>
                    <div className="footer-logo">
                    <img src="./images/inshortslogo.png" alt="logo"/>
                    </div>
                    <h3>Inshorts Pte. Ltd</h3>
                    <h3>© COPYRIGHT 2021</h3>
                </div>
                <div className="footer-right-container">
                    <h3>Facebook</h3>
                    <h3>Twitter</h3>
                    <h3>Email</h3>
                </div>
            </div>
        </section>
        </>
    );
};

export default Footer;