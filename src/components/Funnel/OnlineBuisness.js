import React from 'react'
import BuisnessData from './BuisnessData'
import Image from 'next/image';

const OnlineBuisness = () => {
    return (
        <>
            <section className="online-buisness padding60">
                <div className="col-full">
                    <div className="online-buisness-inner">
                        <div className="center">
                            <h2 className='m4 white'>Literally, ANYONE Doing Business Online
                                <span className="block">NEEDS A Lead Capture Funnel</span> </h2>
                        </div>
                        <div className="grid-container m4">
                            {BuisnessData.map((curElm) => {
                                return (
                                        <div key={curElm.id ?? curElm.title} className="grid-item bg-white rounded p-4">
                                          <div className="center">
                                                <Image src={curElm.img} alt="" />
                                                <h4 className='blue'><b>{curElm.title}</b></h4>
                                                <p>{curElm.para}</p>
                                          </div>
                                        </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OnlineBuisness
