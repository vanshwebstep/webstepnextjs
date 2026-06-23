import React from 'react'
import Features from './FeatureData'
import FunelRev from './FunelRev'
import Image from 'next/image';

const MarketingList = () => {
    return (
        <>
            <section className="marketing-list padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="center">
                            <h2 className='m4'>Build Marketing Lists Filled With <span className="block">Written Emails Including Your Own Links</span> & Enjoy FunnelMates’ Amazing Features</h2>
                        </div>
                        {Features.map((curElm) => {
                            return (
                                    <div key={curElm.id ?? curElm.btn} className="featured-box">
                                        <div className="center">
                                            <button className="btn-pink rounded-5">{curElm.btn}</button>
                                            <h2 className='m4'>{curElm.maintitle}</h2>
                                        </div>
                                        <div className="devider">
                                            <div className="col-50">
                                                <div className="featured-img">
                                                    <Image src={curElm.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-50">
                                                <div className="featured-des text-left">
                                                    <p>{curElm.des1}</p>
                                                    <p>{curElm.des2}</p>
                                                    <p>{curElm.des3}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>
               <FunelRev/>
        
            </section>
           
        </>
    )
}

export default MarketingList
