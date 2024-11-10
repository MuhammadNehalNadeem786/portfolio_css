import React from 'react'
import '../../css/about.css'
import facebook from '../../../../public/assets/social/fb.svg';
import instagram from '../../../../public/assets/social/insta.svg';
import Linkedin from '../../../../public/assets/social/linkin.svg';
import Twiter from '../../../../public/assets/social/tw.svg';
import frontEnd from '../../../../public/assets/specialization/code.svg'
import back from '../../../../public/assets/specialization/back.svg'
import db from '../../../../public/assets/specialization/db.svg'
import responsive from '../../../../public/assets/specialization/responsive.svg'
import uiux from '../../../../public/assets/specialization/uiux.svg'
import version from '../../../../public/assets/specialization/version.svg'
import Image from 'next/image';
const AboutMe = () => {
    return (
        <div>
            <section className='about-me-section'>
                <div className='text'>
                    <h3 className='intro-about'>
                        {"I'm Muhammad Nehal, a passionate AI student at GIAIC with a growing expertise in TypeScript and Next.js. Enthusiastic to delve into cutting-edge technologies, I'm building a solid foundation in web development and artificial intelligence. With a deep love for learning and innovation, I'm driven to continuously expand my skills and make impactful contributions in the tech world."}
                    </h3>
                </div>
                <div className='followme'>
                    <h4 className='about-me-follow-me'>Find Me:</h4>
                </div>
                <div className='logo-container'>
                    <div className='logo-div'>
                        <Image src={facebook} alt='facebook' id='extra-social' className='social-logos' width={100} height={50}></Image>

                    </div>
                    <div className='logo-div'>
                        <Image src={Twiter} alt='facebook' id='extra-social' className='social-logos' width={100} height={50}></Image>

                    </div>
                    <div className='logo-div'>
                        <Image src={instagram} alt='instagram' id='extra-social' className='social-logos' width={100} height={50}></Image>

                    </div>
                    <div className='logo-div'>
                        <Image src={Linkedin} alt='Linkedin' id='extra-social' className='social-logos' width={100} height={50}></Image>
                    </div>
                </div>
            </section>

            <section className='specialize-section'>
                <div className='head-div'>
                    <h2 className='head-specializing'>I AM LEARNING THIS SKILLS </h2>
                </div>
                <div className='specializations-div'>
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={frontEnd} alt='frontEnd' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>Front-end Development</h4>
                        </div>
                        <div className="specialize_text">
                            <p>I am expert in HTML5 CSS3 Javascript Typescript React and Next js</p>
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={responsive} alt='responsive-svg' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>Responsive Design</h4>
                        </div>
                        <div className="specialize_text">
                            <p>Creating visually appealing and functional websites accross devices</p>
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={uiux} alt='uiux-svg' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>UI/UX Design</h4>
                        </div>
                        <div className="specialize_text">
                            <p>Wireframing prototyping userflow analysis</p>
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={version} alt='version-svg' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>Version Control</h4>
                        </div>
                        <div className="specialize_text">
                            <p>I am expert & doing Git Github Bitbucket, providing the best</p>
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={back} alt='back-svg' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>Back-end Development</h4>
                        </div>
                        <div className="specialize_text">
                            <p>I am expert & doing in Nodejs Expressjs koajs</p>
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className='specializations'>
                        <div className="icon">
                            <Image src={db} alt='db-svg' id='icons-image'></Image>
                        </div>
                        <div className="icon_text">
                            <h4>Database Management</h4>
                        </div>
                        <div className="specialize_text">
                            <p>I am expert & doing MongoDb GraphQl</p>
                        </div>
                    </div>
                    {/* ---------- */}
                </div>

            </section>
        </div>
    )
}

export default AboutMe