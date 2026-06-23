import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("FM-FE-105-ImageBody-66.png");

const Proverbial = () => {
    return (
        <>
            <section className="Proverbial-sec padding60">
                <div className="col-full">
                    <div className="proverbial-inner max-1140">
                        <div className="center">
                            <h2 className='m4'>So Here You Stand At The Proverbial Crossroads…</h2>
                            <div className='m-4'>  <Image src={img} alt="" /></div>
                            <div className="max-1000 ">
                                <div className="m4 text-left">
                                    <p>You could always turn left, forget everything we’ve talked about (which you’d kinda need to, because how sucky would it be to KNOW how good your new life would be, and not be living it??)</p>
                                    <p>Or…</p>
                                    <p>You Could Turn RIGHT, Select the Funnelmates Package that makes sense for you, and join us on this journey to success!</p>
                                    <p>My entire team and I have worked REALLY hard to make your choice just now a 100% No Brainer, and as such, I have a feeling you’re about to Make The Right Decision! 😉</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proverbial



