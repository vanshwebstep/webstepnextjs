import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const logogroup = assetImage("logos-group.png");

const Builder = () => {
    return (
        <section className="builder padding60 bg-lightblue">
            <div className="col-full">
                <div className="max-1140">
                    <div className="builder-inner center">
                        <h2 className='m4 italic'>See How To Earn FunnelMates Cash
                            <span className="block">Using Our Funnel Builder</span></h2>
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/dfbAJhxx73o?si=2WpuP_JQ_KJ2O4yZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p ><span className="block">One Time Investment | No Monthly Fees</span>
                            Instant Funnels + Funnel Builder + FunnelMates Cash + VIP’s Bonus</p>
                            <button className="bg-blue m4">click here to claim your FunnelMates access now !</button>
                            <div className="logos-img m4"><Image src={logogroup} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Builder


