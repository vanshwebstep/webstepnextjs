"use client"
import {React,useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const logogroup = assetImage("logos-group.png");

const Faq = () => {
    const item=[
        {
            id:0,
            title:"Truth is Cindy...I skipped right to the end. Can you sum up FunnelMates for me in just a few words?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",

        },
        {
            id:1,
            title:"Hold on. Did you say set up only takes 27 seconds? How is that even possible?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
        {
            id:2,
            title:"Ok, I get it now. So, what affiliate networks does FunnelMates support?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
        {
            id:3,
            title:"Cindy, I hope you don't take this the wrong way...but what’s your background?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
        {
            id:4,
            title:"You mentioned FunnelMates spending money, what’s that?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
        {
            id:5,
            title:"So how many instant funnels can I get for $30?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
        {
            id:6,
            title:"Ok, so what if I’m looking for a new funnel, but I’ve spent all of my cash?",
            des:"No problem. Just imagine having countless funnels at your fingertips, for every niche imaginable (yep, including yours) where affiliate & digital Marketers are showered with automated leads & floods of commissions from multiple networks in only 27 seconds.",
            
        },
    ];
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
       setActiveIndex(index === activeIndex ? -1 : index);
    };
  return (
    <section className="faq-section padding60">
        <div className="col-full">
             <div className="faq-inner center max-1000">
              <h2 className='m4'>Frequently Asked Questions</h2>
              {item.map((item, index) => (
                <div key={item.title} className={`accordian_item ${index === activeIndex ? 'active' : ''}`}>
                    <div className="accordian_head">
                        <button className='btn btn-pink rounded-5 w-100 text-left' onClick={() => handleClick(index)}>{item.title}<IoMdArrowDropdown /></button>
                    </div>
                    {index === activeIndex && <div className="itembody text-left shadow-box"><p>{item.des}</p></div>}
                </div>
            ))}
            <div className="center">
            <p ><span className="block">One Time Investment | No Monthly Fees</span>
                Instant Funnels + Funnel Builder + FunnelMates Cash + VIP’s Bonus</p>
            <button className="bg-blue m4">click here to claim your FunnelMates access now !</button>
            <div className="logos-img m4"><Image src={logogroup} alt="" /></div></div>
             </div>
        </div>
    </section>
  )
}

export default Faq



