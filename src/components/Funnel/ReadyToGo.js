import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const marketer = assetImage("bg1.png");
const marketer2 = assetImage("bg2.png");
const marketer3 = assetImage("bg3.png");
const marketer4 = assetImage("bg4.png");
const marketer5 = assetImage("bg5.png");
const marketer6 = assetImage("bg6.png");
const ReadyToGo = () => {
    const ReadyData=[
        {
            id: 0,
            img: marketer,
            title: "No Tech Skills Required",
    
        },
        {
            id: 1,
            img: marketer2,
            title: "No Creative Talents Needed",
    
        },
        {
            id: 2,
            img: marketer3,
            title: "No Writing Necessary",
    
        },
        {
            id: 3,
            img: marketer4,
            title: "No Expensive Additional Hosting Or Software Tools",
    
        },
        {
            id: 4,
            img: marketer5,
            title: "No ‘Guru’ Level Lists Or Traffic Secrets Needed",
    
        },
        {
            id: 5,
            img: marketer6,
            title: "No Domain Required",
    
        },
    ]
    return (
        <>
            <section className="ready-to-go-sec padding60">
                <div className="col-full">
                    <div className="ready-to-go">
                        <div className="center">
                            <h2 className='m4 white'>Finally, There’s Nothing Holding You Back
                                <span className="block">From Having Your Own Ready-To-Go List Building Funnel</span>
                                Just Moments From Now! </h2>
                        </div>
                        <div className="grid-container m4">
                            {ReadyData.map((curElm) => {
                                return (
                                        <div key={curElm.id} className="grid-item bg-white rounded p-4">
                                            <div className="center">
                                                <Image src={curElm.img} alt="" />
                                                <h4 className='blue'><b>{curElm.title}</b></h4>
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

export default ReadyToGo


