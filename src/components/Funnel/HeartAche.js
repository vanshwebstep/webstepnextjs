import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const heartache = assetImage("headeche.png");
const img = assetImage("FM-FE-10-ImageBody-02.png");

const HeartAche = () => {
    return (
        <section className="heartache padding60 b">
            <div className="col-full">
                <div className="center"><Image src={img} alt="" /></div>
                <div className="heartache-inner max-1140">

                    <div className="devider align-stretch">

                        <div className="col-60  inline-flex">
                            <div className="des-boc text-left">
                                <p>When good people like you give up and walk away from their money making projects over bad software…</p>
                                <p><b>It simply breaks my heart.</b></p>
                                <p>And it’s not just the money they’re missing out on…</p>
                                <p>It’s the ideas, the solutions, and the VALUE the world has to miss out on thanks to another true solution stabbed in the back by crappy software…</p>
                                <p><b>I know, I know, I sound like I’m a little mad, It’s because I AM!</b></p>
                                <p>My team and I put in YEARS getting this platform right for you, and I’ll be damned if some fast talking person with a slick pitch full of lies is going to keep me from being able to help you get to the level of success we BOTH know you should be playing at.</p>
                                <p><b>Not this time!</b></p>
                            </div>
                        </div>
                        <div className="col-40 inline-flex">
                            <Image src={heartache} alt="" className='rounded cover' />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeartAche



