import React from 'react';

const LandingPage = () => {
  return(
    <>
    <section className="landingPage">
        <div className="lp-left-right">
            <div className="lp-left">
                <div className="lp-img">
                    <img className="lp-img" src="./images/image1inshorts.jpg" alt="" />
                </div>
            </div>
            <div className="lp-right">
                    <div className="lp-text">
                    <h1> Stay informed in 60 words. </h1>
                    <p>We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.</p>
                    </div>
                    

                <div className="lp-logos">
                    <div>
                    <img className="appstorelogo" src="./images/app store logo inshorts.png" alt="logo" />
                    </div>

                    <div>
                    <img className="playstorelogo" src="./images/google play logo inshorts.png" alt="logo" />
                    </div>
                    
                </div>

                    
                
            </div>
        </div>
    </section>
    </>
  );
};

export default LandingPage;
