import React from 'react'
import Join from './components/Join/Join'

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Join />
        </section>
        
           
    )
}

export default Hero;
