"use client"
import React from 'react';
import '../../css/contact.css'
import Image from 'next/image';
import Send_Svg from '../../../../public/assets/extra/send.svg'

export default function ContactSection() {
    return (
        <div className="contact-section">
            <div className="header">
                <h1>{"LET'S WORK"}</h1>
                <h1 className='heading-avatar'>T<span className="avatar"><Image className='Image-avatar' src={Send_Svg} alt="Avatar" width={100} height={100} /></span>GETHER</h1>
            </div>
            <div className="form-container">
                <form action="mailto:youremail@example.com" method="post" encType="text/plain">
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" required />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}