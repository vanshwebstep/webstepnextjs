import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const money = assetImage("money-s.png");

const FunelSec = () => {
    return (
        <>
            <section className="sec-section">
                <div className="col-full">
                <div className="center">
                 <Image src={money} alt="" />
                </div>
                    <h3 className='center'>New FunnelMates Suite!</h3>
                    <div className="funnel-inner">
                        <div className="grid-container">
                            <div className="grid-item">
                                <div className="inner-list">
                                    <ul>
                                        <li><FaCheckCircle />Use Our Done-For-You Affiliate Funnels</li>
                                        <li><FaCheckCircle />OR Use Our Templates To Make Your Own</li>
                                        <li><FaCheckCircle />Fully Hosted & Managed Autoresponder</li>
                                        <li><FaCheckCircle />Add Unlimited Subscribers</li>
                                        <li><FaCheckCircle />Handwritten Promo Emails Forever</li>
                                        <li><FaCheckCircle />Beginner Friendly Click & Go App</li>
                                        <li><FaCheckCircle />Includes InBuilt Traffic Toolkit</li>
                                        <li><FaCheckCircle />Automatically GDPR Compliant</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="inner-list">
                                    <ul>
                                        <li><FaCheckCircle />Hosted One Click Funnel Templates</li>
                                        <li><FaCheckCircle />Easy Drag & Drop Page Designer</li>
                                        <li><FaCheckCircle />Done-For-You Email Templates</li>
                                        <li><FaCheckCircle />Sell Your Funnels & We Pay You Cash</li>
                                        <li><FaCheckCircle />Integrates With Autoresponders</li>
                                        <li><FaCheckCircle />Integrated With Zapier and GoToWebinar</li>
                                        <li><FaCheckCircle />Works On Mac, PC, Mobile ... Everywhere</li>
                                        <li><FaCheckCircle />BONUS $30 FunnelMates Cash!</li>
                                    </ul>
                                </div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FunelSec



