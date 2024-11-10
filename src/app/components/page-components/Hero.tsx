import React from 'react'
import '../../css/hero.css'
import Image from 'next/image'
import handWaving from '../../../../public/assets/hero/waving.svg'
import cvArrowSvg from '../../../../public/assets/hero/cv_rrow.svg'
const Hero = () => {
    return (
        <div>
            <section className='hero-section'>
                <div className='hero-heading'>
                    <h1>DEVELOPING WITH 💥</h1>
                    <div className='fire-hero-heading'>
                        <h1 id='space-hero-heading'>💥 ENERGY, SHAPING </h1>
                    </div>
                    <h1>🌟 INNOVATION</h1>

                </div>
                <div className='hero-welcome'>
                    <p>Welcome to my online realm!</p>
                    <p>I combine my passion for coding, </p>
                    <p> AI advancements, and App development to shape solutions</p>
                    <p>that make a difference.</p>
                </div>

                <div className='hero-button'>
                    <div className='hero-cv-div'>
                        <button id='hero-cv-btn'>
                            <p id='hidden_text'>Hire Me</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero