import React from 'react'
import Inside from './BInsideData'
import Image from 'next/image';

const BuilderInside = () => {
    return (
        <>
            <section className="builder-inside-sec padding60">
                <div className="col-full">
                    <div className="inside-inner">
                        <div className="center">
                            <h2>Here’s Exactly What You Get <span className="block">Inside The Builder</span></h2></div>

                        {Inside.map((curElm) => {
                            return (
                                    <div key={curElm.id ?? curElm.title} className="featured-box m4">
                                        <div className="grid-container m4">
                                            <div className="grid-item">
                                                <div className="featured-img">
                                                    <Image src={curElm.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="grid-item">
                                                <div className="featured-des text-left">
                                                    <h4><b>{curElm.title}</b></h4>
                                                    <p>{curElm.para1}</p>
                                                    <p>{curElm.para2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuilderInside
