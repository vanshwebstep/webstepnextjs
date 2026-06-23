import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("FM-FE-103-ImageBody-64.png");
const img2 = assetImage("FM-FE-104-ImageBody-65.png");

const Warn = () => {
    return (
        <>
            <section className="warn-sec padding60">
                <div className="col-full">
                    <div className="warn-inner max-1240">
                        <div className="center">
                            <h2 className='m4'>I Do Have To Warn You –
                                <span className="block">There Is One Small Catch Though…</span>
                            </h2></div>
                        <div className="grid-container m4">
                            <div className="grid-item">
                                <div className="text-left">
                                    <p><b>And It’s a very real catch when it comes to securing your FunnelMates access right now.</b></p>
                                    <p>As I’ve said… this is a very time limited promotion. It HAS to be for a few solid reasons.</p>
                                    <p>FunnelMates is live right now though, welcoming new members. It’s a hustling, bustling community in there right now!</p>
                                    <p>But the longer you wait, the busier it will become, increasing our server costs and bumping you further down the line of people able to claim the all-important ‘founders’ benefits that you get when any new community starts to really take off.</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <Image src={img} alt="" />
                            </div>
                            <div className="grid-item">
                                <Image src={img2} alt="" />
                            </div>
                            <div className="grid-item">
                                <div className="text-left">
                                    <p><b>As a result, we’ll naturally have to remove some of our perks (very likely removing our cash entry bonus) and we’ll definitely be increasing the price.</b></p>
                                    <p>If you were to say no to yourself and leave this page now, I can’t guarantee this offer will still be available but I can guarantee that right now is your chance to get the best deal you’ll ever see for FunnelMates access.</p>
                                    <p>I highly recommend that you take action right now and take advantage while you still can.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Warn



