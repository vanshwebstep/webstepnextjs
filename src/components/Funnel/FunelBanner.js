import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const orderimg = assetImage("order-now.png");
const logogroup = assetImage("logos-group.png");
const logo = assetImage("FM-JV-02-LogoBody-01.png");
const FunelBanner = () => {
    return (
        <>
            <section className=" funel-banner">
                <div className="col-full">
                <div className="banner-inner">
                <div className="center mb-4">
                  <Image src={logo} alt="" />
                </div>
                    <button className="bg-blue  "> <span>FUNNEL MASTERY BONUS:</span> 10 Part Training Series With Incl. Resources To Build Your Own Funnels.</button>
                    <h1>Want A Profitable Mailing List <span>But Not Sure Where To Begin?</span>  We’ll Guide You, Equip You & Even<u> PAY You Cash </u>To Do It!</h1>
                    <button className="bg-blue"><span>5-10 Minutes A Day</span>  Using Automation Software & Our Time-Tested Strategy</button>
                    <h4>See How Your New Site Can Be Live In Just 27 Seconds From Now!</h4>
                    <div className="video-sec">
                        <iframe width="750" height="450" src="https://www.youtube.com/embed/dkOIxSXyhkA?si=XY4zHezFRHidxgMo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <h4>Access Today For Only <span>$197.00</span> $46.95 + $9.97/Month</h4>
                    <div className="order-now">
                        <Image src={orderimg} alt="" />
                    </div>
                    <div className="logo-group">
                        <Image src={logogroup} alt="" />
                    </div>
                    <p>&quot;Today You&apos;ll Get Access To The Complete FunnelMates Suite, Traffic Automation Software Tools & Our Beginner Friendly 10 Part Video Series (Inc. Templates & Resources) Responsible For Taking 1,000&apos;s Of Complete Affiliate Zero&apos;s To Legendary Affiliate Marketing Hero&apos;s&quot;</p>
                </div>
                </div>
            </section>

        </>

    )
}

export default FunelBanner


