import React from 'react';

const Download = () =>{
    return(
        <>
        <section className="download">
            <div className="download-text-logo">
                <div className="download-text-box">
                    <div className="download-text"> 
                    <h1>Download the easiest way to stay informed</h1>  
                    </div>
                    {/* <div className="download-line"> </div> */}
                </div>
                <div className="download-logo">

                    <div className="appstore-logo">
                    <img src="./images/app store logo inshorts.png" alt="logo" />
                    </div>

                    <div className="playstore-logo">
                    <img src="./images/google play logo inshorts.png" alt="logo" />
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};

export default Download;