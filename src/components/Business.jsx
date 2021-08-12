import React from 'react';

const Business = () =>{
    return(
        <>
        <section className="business">
            <div className="business-text-logo">
                <div className="business-text-box">
                    <div className="business-text"> <h1>Best in the Business</h1>  </div>
                    <div className="business-line"> </div>
                </div>
                <div className="business-logo">
                    <div className="business-boxes">

                        <div className="business-box-1" >
                            <div className="business-box-logo"></div>
                            <div className="business-box-text">
                                <h1>Loved by users</h1>
                                <p>With a rating of 4.6, we’re the highest-rated news app on the Playstore</p>
                            </div>
                        </div>

                        <div className="business-box-2" >
                            <div className="business-box-logo"></div>
                            <div className="business-box-text">
                                <h1>Loved by app stores</h1>
                                <p>We’ve been in Apple’s Featured Apps showcase and Google’s list of the Best Apps of 2015</p>
                            </div>
                        </div>

                        <div className="business-box-3" >
                            <div className="business-box-logo"></div>
                            <div className="business-box-text">
                                <h1> Loved by publishers </h1>
                                <p>With more than 30 content partners globally, publishers love being on Inshorts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Business;