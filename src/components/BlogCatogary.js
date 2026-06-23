import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const img = assetImage("mobile_app_development2.png");
const BlogCatogary = () => {
    const catogaryData = [
        {
            id: 0,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
        {
            id: 1,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
        {
            id: 2,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
        {
            id: 3,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
        {
            id: 4,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
        {
            id: 5,
            img: img,
            title: "design",
            des: "A Brand Is Your Company’s Personality And Promise To Your Customer. That Help Create A Feeling",
            btn: 'read more ',
        },
    ]
    return (
        <>
            <section className="blog-catogary ">
                <div className="col-full">
                <div class="beforeline"><h4 class="lining">our catogary</h4></div>
                    <div className="catogary-inner">
                        <div className="grid-container">
                            {catogaryData.map((curElm) => {
                                return (
                                    <>
                                        <div className="grid-item shadow">
                                            <div className="grid-item-inner">
                                            <div className="image-box">
                                                <Image src={curElm.img} alt="" />
                                                </div>
                                                <div className="des-content">
                                                <h4>{curElm.title}</h4>
                                                <p>{curElm.des}</p>
                                                <button className="btn-pink">{curElm.btn}</button>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogCatogary



