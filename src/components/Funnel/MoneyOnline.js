import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const commentimg = assetImage("FM-FE-82-ImageBody-49.png");

const MoneyOnline = () => {
    return (
        <>
            <section className="money-online padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="moneyonlineinner">
                            <div className="center">
                                <h2>It’s Things Like Seeing Complete Beginners Excitedly
                                    <span className="block">Earning Their First Money Online!</span></h2>
                                <Image src={commentimg} alt="" />
                            </div>
                            <div className="text-left">
                                <h4><b>THIS is more than just the $13.50 or $18.50 in commissions.</b></h4>
                                <p>This, for these people and hundreds of other beginner marketers is about opening up a world of entirely new possibilities.</p>
                                <p>Ask any 6, 7 or 8 figure online marketer what their first sale was and I guarantee you they’ll tell you with the excitement of remembering it like it was just yesterday.</p>
                                <p>This Internet Marketing thing really does work! That first sale is your new beginning!</p>
                                <p>With FunnelMates you can use funnels like these people have done, to build lists and make affiliate commissions the easier way.</p>
                                <p>But if you’re like me and want to experience the rush of helping someone new earn their first commissions AND get paid for it it doesn’t get better than FunnelMates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoneyOnline



