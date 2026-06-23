import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const once = assetImage("onceimg.png");
const once2 = assetImage("once2img.png");

const Wrose = () => {
    return (
        <>
            <section className="evn-wrose">
                <div className="col-full">
                    <div className="center">
                        <h2>Even Worse? Once They’re Gone,
                            <span className='block'>70% Of People Will NEVER Be Back Again!</span></h2>
                    </div>
                    <div className="wrose-inner">
                    <div className="devider">
                        
                        <div className="col-50">
                            <div className="inner-listing">
                                <ul>
                                    <li>It’s like you never existed to them.</li>
                                    <li>For some crazy reason we just accept it.</li>
                                    <li>There’s plenty more fish in this massive online sea, right?</li>
                                    <li>You can just catch the next one.</li>
                                    <li>Yeah, keep telling yourself that…</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-50">
                            <Image src={once} alt="" />
                        </div>
                        <div className="col-50"> <Image src={once2} alt="" /></div>
                        <div className="col-50">
                            <div className="inner-content pe-3">
                                <p>If you don’t have a lead capture funnel at the right time, offering a lead magnet perfect for what that client, visitor or curious potential customer wants…</p>
                            <h5>You’re in BIG trouble…</h5>
                            <p>So, yes. In an ideal world we would all have an ideal funnel for each and every ideal situation in the moment it’s needed.</p>
                            <p>And in that same ideal world we’d all be earning big fat paychecks from our finely tuned email sequence.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wrose



