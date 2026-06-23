import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const stop = assetImage("FM-FE-18-ImageBody-04.png");

const Stop = () => {
    return (
        <>
            <section className="stop-sec padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="stop-sec-inner">
                            <div className="center">
                                <Image src={stop} alt="" />
                                <h2 className='m4'>Winners Have Funnels (LOTS Of Them!)</h2>
                            </div>
                            <p>Making it SIMPLE for YOU to have an easier and proven path to truly profitable funnels is the reason I get up every morning and the thing that gets me through even my hardest days…</p>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stop



