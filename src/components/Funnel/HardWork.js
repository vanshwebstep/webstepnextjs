import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const work = assetImage("work.png");
const money = assetImage("money.png");

const HardWork = () => {
    return (
        <>
            <section className="hard-work">
                <div className="col-full">
                    <div className="hard-work-inner">
                        <h2><span className="block">BUT…</span> Making Funnels Is Hard Work</h2>
                        <h4>Creating, Writing, Designing, More Writing, Uploading,<br/>Testing, Tweaking…SCREAMING! <span className="block">We’ve All Been There!</span></h4>
                    
                        <div className="devider">

                            <div className="col-50">
                            <div className="work-img">
                                <Image src={work} alt="" />
                                </div>
                            </div>
                            <div className="col-50">
                                <div className="listing-box">
                                    <h3>Creating A Funnel Takes TIME</h3>
                                    <p>In a basic lead capture funnel you need:</p>
                                    <ul>
                                        <li> A lead magnet as the incentive</li>
                                        <li>Your landing/optin page</li>
                                        <li>Your thank you/download pages</li>
                                        <li>Sales copy written for the pages</li>
                                        <li>Follow up emails in your sequence</li>
                                        <li>Emails loaded into autoresponder</li>
                                        <li> Emails written regularly when the autoresponder sequence runs out</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-50">
                                <div className="listing-box">
                                    <h3>Creating A Funnel Costs MONEY</h3>
                                    <p>You need to have software to build the pages, design the graphics, format the pdf’s etc</p>
                                    <p>Then you need to pay (monthly/yearly) for:</p>
                                    <ul>
                                        <li>A Domain Name</li>
                                        <li>Hosting</li>
                                        <li> Autoresponder Software</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-50">
                            <div className="work-img">
                                <Image src={money} alt="" />
                                </div>
                            </div>

                        </div>
                        <p>Or if you Weren’t One Of The Lucky Few Blessed At Birth With The Illusive Techie Gene, You Can Outsource It And hope They Do A OK Job, Within The Budget You’d Hoped To Spend.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HardWork



