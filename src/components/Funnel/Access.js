import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const first = assetImage("FM-FE-27-ImageBody-08.png");
const sec = assetImage("FM-JV-07-ImageBody-02.png");
const logogroup = assetImage("logos-group.png");
const Access = () => {
    return (
        <>
            <section className="access grid-2 padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="access-inner">
                            <div className="center">
                                <Image src={first} alt="" />
                                <h2 className='m4'>With Your Own
                                    <span className="block"> FunnelMates Access Today</span></h2>
                                <Image src={sec} alt="" />
                                <h2>Instant List Building Affiliate Funnels
                                    <span className="block">+ The Entire Funnel Builder App</span></h2>
                                <h1>AND ALL ACCESS PASS TO THE <span className="block">  6 Week Affiliate Masterclass Event</span></h1>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <h4>Use FunnelMates Funnels</h4>
                                    <h4 className="blue">Activate 1 Click List Building and Promotion Filled Funnel</h4>
                                    <ul>
                                        <li><span><FaCircleCheck /></span>Done-For-You Lead Magnets</li>
                                        <li><span><FaCircleCheck /></span>Done-For-You Landing Pages</li>
                                        <li><span><FaCircleCheck /></span>Done-For-You Delivery Pages</li>
                                        <li><span><FaCircleCheck /></span>Fully Hosted & Managed Autoresponder</li>
                                        <li><span><FaCircleCheck /></span>Unlimited Subscribers</li>
                                        <li><span><FaCircleCheck /></span>Unlimited Handwritten Promo Emails</li>
                                        <li><span><FaCircleCheck /></span>Your Affiliate ID’s Automatically Added</li>
                                        <li><span><FaCircleCheck /></span>In Any Niche Or Even By Request</li>
                                        <li><span><FaCircleCheck /></span>No Code. Just 1 Click & Done!</li>
                                        <li><span><FaCircleCheck /></span>Custom Traffic Toolkit For Each Funnel</li>
                                        <li><span><FaCircleCheck /></span>Automatically GDPR Compliant</li>
                                    </ul>
                                </div>
                                <div className="grid-item">
                                    <h4>Sell FunnelMates Funnels</h4>
                                    <h4 className="blue">Create Funnels For Personal Use Or Sale</h4>
                                    <ul>
                                        <li><span><FaCircleCheck /></span>Get Paid Cash For Your Funnels</li>
                                        <li><span><FaCircleCheck /></span>Hosted One Click Funnel Templates</li>
                                        <li><span><FaCircleCheck /></span>Easy Drag & Drop Page Designer</li>
                                        <li><span><FaCircleCheck /></span>Done-For-You Email Templates</li>
                                        <li><span><FaCircleCheck /></span>Sell JVZoo, W+, Clickbank Products</li>
                                        <li><span><FaCircleCheck /></span>Share For Free & Get Paid With Leads</li>
                                        <li><span><FaCircleCheck /></span>Sell Your Funnels & We Pay You Cash</li>
                                        <li><span><FaCircleCheck /></span> Integrates With Autoresponders</li>
                                        <li><span><FaCircleCheck /></span> Integrated With Zapier and GoToWebinar</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="center">
                                <p ><span className="block">One Time Investment | No Monthly Fees</span>
                                    Instant Funnels + Funnel Builder + FunnelMates Cash + VIP’s Bonus</p>
                                <button className="bg-blue m4">click here to claim your FunnelMates access now !</button>
                                <div className="logos-img m4"><Image src={logogroup} alt="" /></div></div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Access



