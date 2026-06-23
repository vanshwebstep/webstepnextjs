import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("FM-FE-67-ImageBody-46.png");
const img2 = assetImage("FM-FE-68-ImageBody-47.png");
const img3 = assetImage("FM-FE-69-ImageBody-48.png");

const OnlineMarketing = () => {
    const MarketingData = [
        {
            id: 0,
            maintitle: "New to online marketing?",
            des1: "FunnelMates is perfect for you. You can discover affiliate marketing and list building with absolutely no learning curve. We’ll help you set up your first account, get your first subscriber and see your first affiliate commissions hitting your accounts quick smart.",
            des2: "You’re welcome to keep “eating as many fish” as you like! Once people build their confidence and understanding of online marketing we see many of our members naturally progressing to more advanced strategies, but there’s no pressure whatsoever. You’re completely welcome to stay or proceed at your own pace.",
            img:img,
        },
        {
            id: 1,
            maintitle: "Not quite new, but love a good shortcut?",
            des1: "FunnelMates is perfect for you. You might already have a great idea of ‘where the fish are’, but just need a faster, easier way to get to them. Spend less time messing around doing all the manual work – and more time reaping the benefits!",
            img:img2,
        },
        {
            id: 2,
            maintitle: "Wanna kick your profits up a notch?",
            des1: "FunnelMates is perfect for you. Use our templates and easy-to-use drag and drop builder to create custom funnels for your own personal use or add to our marketplace and you’ll get paid any time one of our members chooses your funnel!",
            des2: "Yes, that’s right, you can SELL the funnels you create to other members right inside the FunnelMates members area!",
            des3:"FunnelMates will pay you CASH every time a member activates your funnel.",
            img: img3,
        },
       
    ]
    return (
        <>
            <section className="online-marketing padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="center">
                            <h2 className='m4'>FunnelMates Gives You The Fish, The Rod,<span className="block"> AND The Reel And Just For Good Measure… </span> The Entire Fishing Boat!</h2>
                        </div>
                        {MarketingData.map((curElm) => {
                            return (
                                    <div key={curElm.id} className="featured-box m4">
                                        <div className="grid-container m4">
                                            <div className="grid-item">
                                                <div className="featured-img">
                                                    <Image src={curElm.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="grid-item">
                                                <div className="featured-des text-left">
                                                    <h4><b>{curElm.maintitle}</b></h4>
                                                    <p>{curElm.des1}</p>
                                                    <p>{curElm.des2}</p>
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

export default OnlineMarketing


