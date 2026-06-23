import React from 'react';
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("FM-FE-65-ImageBody-44.png");

const Beginning = () => {
    const steps = [
        {
            number: 1,
            title: 'Connect',
            description: 'Add your JVZoo, WarriorPlus, Clickbank, PayKickstart and PP to your account settings. They’re all free and if you’re new, we’ll show you how to sign up and set it up.',
            image: img
        },
        {
            number: 2,
            title: 'Select',
            description: 'Use the ‘FunnelMates’ money we give you, to unlock your choice of profit funnels. Everything is instantly activated, branded, written + ready to go.',
            image: img
        },
        {
            number: 3,
            title: 'Profit!',
            description: 'Your funnels each contain a customized traffic toolkit. Simply click to activate your traffic toolkit and add leads into your prewritten, fully automated, email sequences!',
            image: img
        }
    ];

    return (
        <section className="beginning padding60 ">
            <div className="col-full">
                <div className="max-1000">
                    <div className="center m4">
                        <button className="bg-blue  m4">Exciting Yeah? But… Just Wait…!</button>
                        <h2><span className="blue">1-Click Funnels Are</span></h2>
                        <h1>Just The Beginning!</h1>
                        <p className='text-white m4'>As You’ve Seen Having These Completely Ready To Go Funnels Live, Fully Branded And Filled With Prewritten Emails …</p>
                        <p className='text-white mb-8'>Queued & Sent Automatically To Your New Subscribers Is As Easy As:</p>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded m4">
                            <div className="text-img-boxs-inner d-flex">
                                <div className="center col-50">
                                    <button className="btn-pink rounded-5">Step #{step.number}</button>
                                    <h5>{step.title}</h5>
                                    <p>{step.description}</p>
                                </div>
                                <div className="img-boxxxx col-50"><div className="inner"><Image src={step.image} alt="" /></div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beginning;



