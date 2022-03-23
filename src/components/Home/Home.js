import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='d-flex justify-content-center text-center '>
            <div style={{ color: "rgb(58, 0, 83)", fontWeight: "700", marginTop: "60px" }}>
                <h1>Start planning your day!!</h1>
                <Link to="/mytodos"><h3>Let's Go</h3></Link>
            </div>
        </div>

    );
};

export default Home;