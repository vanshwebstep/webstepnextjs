import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const user = assetImage("review-user.png");

const FunelRev = () => {
    return (
        <div className="funnel-review-inner">
            <div className="review-inner">
                <div className="quote"><FaQuoteLeft /></div>
                <div className="white-shadow-box">
                    <p>“Clickbank Platinum Powerseller & JVZoo Top Seller and Affiliate Marketer Cindy Donovan, with OVER 200,000 sales to her name knows what works and what doesn’t! So when she offers to manage sales for me, in a platform with so many amazing features I know FunnelMates is guaranteed to be an absolutely a winner!</p>
                    <div className="user-info ">
                        <div className="user-img"><Image src={user} alt="" /></div>
                        <div className="user-infos infos">
                            <h6>Mark Ling</h6>
                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        </div>
                    </div>
                </div>
                <div className="quote right"><FaQuoteRight /></div>
            </div>
           
        </div>
    )
}

export default FunelRev



