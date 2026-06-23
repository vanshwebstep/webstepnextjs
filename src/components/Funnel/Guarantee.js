import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const gimg = assetImage("FM-O1-47-ImageBody-28.png");
const line = assetImage("FM-FE-22-ImageBody-05.png");

const Guarantee = () => {
    return (
        <>
            <section className="Guarantee-sec padding60">
                <div className="col-full">
                    <div className="max-1140">

                        <div className="sec-inner text-left">
                            <div className="center italic blue"><h1>My Personal Guarantee To You!</h1></div>
                            <div className="center"><Image src={line} alt="" /></div>
                            <p>As an early adopter, I know you’ve already seen the value and potential of getting your hands on FunnelMates.</p>
                            <p> However…if you’re someone who LIKES to be at the cutting edge but always seems to be stopped, stuck, regretting chances you just didn’t take, then let me make this easy for you by offering my 100% money back guarantee.</p>
                            <div className="guarantee-box bg-white">
                                <div className="devider">
                                    <div className="col-40">
                                        <div className="g-img"><Image src={gimg} alt="" /></div>
                                    </div>
                                    <div className="col-60">
                                        <div className="g-content">
                                            <h2 className='center'>30 Day Money Back <span className="block">Guarantee</span> </h2>
                                           
                                            <p>I know there’s a lot of pressure for you right now, with entry spots being so limited, the VIP’s bonuses being restricted to this page… and the price about to increase too.</p>
                                            <p>So I want to give you a chance to remove all doubt and instead of locking yourself into something “forever”, I invite you to just try it out instead.</p>
                                            <p>Join our happy FunnelMates family now, and if you aren’t absolutely thrilled with your results in 30 days, simply contact our support team and we’ll refund your money. No Questions asked, No hard feelings, No Kidding!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Guarantee



