import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const logogroup = assetImage("logos-group.png");

const Investment = () => {
    return (
        <>
            <section className="investment-inner">
                <div className="col-full">
                    <div className="center">
                        <p ><span className="block">One Time Investment | No Monthly Fees</span>
                            Instant Funnels + Funnel Builder + FunnelMates Cash + VIP’s Bonus</p>
                        <button className="bg-blue m4">click here to claim your FunnelMates access now !</button>
                        <div className="logos-img m4"><Image src={logogroup} alt="" /></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Investment



