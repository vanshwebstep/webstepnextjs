import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const better = assetImage("FM-FE-34-ImageBody-14.png");
const testiimg = assetImage("FM-JV-21-ImageBody-11.png");

const Testimonial = () => {
    return (
        <>
            <section className="testimonial padding60">
                <div className="col-full">
                    <div className="testimonial-inner max-1000 center">
                        <h2 className='italic'><b>This Is Your Chance To Build
                            <span className='block'>Your Most Powerful Asset Available To You (Your list!)</span>
                            Faster And Easier Than You Ever Imagined Possible.</b></h2>
                            <Image src={better} alt="" />
                            <h2><span>Talk To You Soon,</span></h2>
                            <Image src={testiimg} alt="" />
                            <h4 className="blue italic">Cindy Donovan</h4>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Testimonial



