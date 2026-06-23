import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const orderimg = assetImage("order-now.png");
const line = assetImage("FM-FE-30-ImageBody-11.png");
const Masterclass = () => {
    return (
        <>
            <section className="master-class grid-2 padding60">
                <div className="col-full">
                    <div className="masterclass-inner max-1140">
                    <div className="center"><h2 className="blue italic">Get FunnelMates Below & Secure Access To The Entire Suite AND All Access Pass To The Affiliate Masterclass</h2>
                    <div className="center"><Image src={line} alt="" /></div>
                    </div>
                        <div className="grid-container">
                        <div className="grid-item shadow-box">
                            <h4><b>Use FunnelMates Funnels</b></h4>
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
                            <h4>FunnelMates Access <span> $33.97</span></h4>
                            <Image src={orderimg} alt="" />
                        </div>
                        <div className="grid-item shadow-box">
                            <h4><b>Sell FunnelMates Funnels</b></h4>
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
                            <h4>EXTREMELY LIMITED OFFER<span className="block"> 50% Spending Money Bonus LIVE</span> </h4>
                            <h5>Get $20 $30 FunnelMates Cash Order NOW!</h5>
                            <h4>FunnelMates Access <span>$46.95</span></h4>
                            <Image src={orderimg} alt="" />
                        </div>
                    </div>
                        </div>
                </div>
            </section>

        </>
    )
}

export default Masterclass



