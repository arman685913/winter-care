import React from 'react';
import Banner from './Home/Banner';
import About from './Home/About';
import Works from './Home/Works';
import Success from './Home/Success';
import Winter from './Home/Winter';

const Home = () => {
    return (
        <div  >
            {/* Banner */}
            <div className='my-2'>
                <Banner></Banner>
            </div>
            <div>
                {/* About */}
                <About></About>
            </div>
            <div>
                {/* How To Works */}
                <Works></Works>
            </div>
            <div>
                {/*Extra 2 Winter Without Warmth */}
                <Winter></Winter>
            </div>
            <div>
                {/* Extra 1 */}
                <Success></Success>
            </div>
        </div>
    );
};

export default Home;