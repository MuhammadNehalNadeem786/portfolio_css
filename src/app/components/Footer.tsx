import Image from 'next/image';
import Link from 'next/link';
import '../css/footer.css';
import React from 'react'
import logosvg from '../../../public/assets/logos/logo.svg';

import fb_svg from '../../../public/assets/social/fb.svg';
import insta_svg from '../../../public/assets/social/insta.svg';
import li_svg from '../../../public/assets/social/linkin.svg';
import tw_svg from '../../../public/assets/social/tw.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Image src={logosvg} width={80} height={80} alt='logo'></Image>
                    <h1 className='heading'>EHAL</h1>
                </div>
                <div className="footer-links">
                    <h4>Navigation Links</h4>
                    <ul>
                        <li><Link className="footer-link-link" href="#about">About</Link></li>
                        <li><Link className="footer-link-link" href="#contact">Contact</Link></li>
                        <li><Link className="footer-link-link" href="#projects">Projects</Link></li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <h4>Find Me</h4>
                    <div className="social-icons">
                        <div className="logo-div">

                            <Link href="#"><Image className='Icons-social' id='extra-social' width={100} height={100} src={fb_svg} alt="Facebook"></Image></Link>
                        </div>
                        <div className="logo-div">

                            <Link href="#"><Image className='Icons-social' id='extra-social' width={100} height={100} src={tw_svg} alt="Twitter"></Image></Link>
                        </div>
                        <div className="logo-div">
                            <Link href="#"><Image className='Icons-social' id='extra-social' width={100} height={100} src={insta_svg} alt="Instagram"></Image></Link>
                        </div>
                        <div className="logo-div">

                            <Link href="#"><Image className='Icons-social' id='extra-social' width={100} height={100} src={li_svg} alt="LinkedIn"></Image></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MUHAMMAD NEHAL. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer