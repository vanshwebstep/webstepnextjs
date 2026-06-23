import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("Ffirstimg.png");

const FFirst = () => {
    return (
        <>
            <section className="f-first-img">
                <div className="col-full">
                    <div className="first-inner">
                        <div className="devider">
                            <div className="col-50">
                                <Image src={img} alt="" />
                            </div>
                            <div className="col-50">
                                <div className="funel-inner">
                                    <h2>FunnelMates Is The FIRST EVER System That Simplifies List Building Affiliate Funnels <span className='block'>To Something Anyone Can Use</span></h2>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FFirst



