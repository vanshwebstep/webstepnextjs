import React from 'react'
import FunelRev from './FunelRev'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("vip.png");
const img2 = assetImage("vip2.png");
const line = assetImage("FM-FE-22-ImageBody-05.png");
const NotStopHere = () => {
    const Features = [
        {
            id: 0,
            btn: 'Feature #1',
            maintitle: "VIP’s Dashboard",
            des1: 'VIP’s: VIRAL INTENSIFIER PROFITS SYSTEM: Can only be unlocked in your account during launch.',
            des2: "Once activated, you’ll get access to our VIP’s hidden page revealing a secret way to add your affiliate links on hundreds of links inside the FunnelMates dashboard itself. (Not only in the emails and funnel pages)",
            des3:'Also, when people buy FunnelMates using your special VIP link, ALL product recommendations, funnel previews and promotional links in their FunnelMates dashboard will contain YOUR affiliate links!',
            des4:'And one last thing: Unlock this exclusive perk now, and it will also be available for any person you introduce to FunnelMates.',
            img: img,
        },
        {
            id: 1,
            btn: 'Feature #2',
            maintitle: "Limitless Emails",
            des1: 'LIMITLESS HANDWRITTEN EMAIL PROMOTIONS: Unlock now and benefit in your account email, after email, after email…',
            des2: "When funnels are unlocked, you’ll be given the option to activate our done-for-you list management service. When activated, after the initial automated sequence is finished our system will automatically segment your list according to their areas of interest.",
            des3:"We will then continue to send emails (max of 2-3/week) for high converting offers or upcoming launches as they go live, reviewing products for you, creating bonuses for your customers and crafting emails that sell. All with your affiliate codes added in every email we send to your subscribers.",
            des4:"We’ve been managing people’s lists in this capacity for 10+ years. Now, we’re ramping it up and offering this service to you too.",
            img: img2,
        },
    ]
    return (
        <>
            <section className="notstop padding60">
                <div className="col-full">
                    <div className="max-1140 ">
                        <div className="nonstop-inner center">
                            <h5 className="blue">Everything You Need Is Included</h5>
                            <h1 className="italic black">But We Didn’t Stop Here!</h1>
                            <div className="center"><Image src={line} alt="" /></div>
                            <p className='m4'>Maybe I’m crazy, but I can’t help but over deliver… to make this an even easier decision for you I’m also including two very special launch-only bonuses.</p>
                        </div>
                        {Features.map((curElm) => {
                            return (
                                    <div key={curElm.id} className="featured-box">
                                        <div className="center">
                                            <button className="btn-pink rounded-5">{curElm.btn}</button>
                                            <h2 className='m4'>{curElm.maintitle}</h2>
                                        </div>
                                        <div className="devider">
                                            <div className="col-50">
                                                <div className="featured-img">
                                                    <Image src={curElm.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-50">
                                                <div className="featured-des text-left">
                                                    <p>{curElm.des1}</p>
                                                    <p>{curElm.des2}</p>
                                                    <p>{curElm.des3}</p>
                                                    <p>{curElm.des4}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                        <FunelRev />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotStopHere


