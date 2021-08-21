import React from 'react';

const Featured = () =>{
    return(
        <>
        <section className="featured">
            <div className="featured-text-logo">
                <div className="featured-text-box">
                    <div className="featured-text"> <h1>As Featured In</h1>  </div>
                    <div className="featured-line"> </div>
                </div>
                <div >
                    <img className="featured-logo" src="./images/logos all.png" alt="iamai logo" />
                </div>
            </div>
        </section>
        </>
    );
};

export default Featured;