import React from 'react'
import BlogSidebar from './BlogSidebar'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const blogimg = assetImage("image 1.png");
const BlogSingal = () => {
    return (
        <>
            <section className="blog-singals blogv1">
                <div className="col-full">
                    <div class="beforeline"><h4 class="lining">our blogs</h4></div>
                    <div className="devider margintop">
                        <div className="col-70">
                            <div className="blog-singal">

                                <div className="des">
                                    <span>by admin</span><span>12 april 2024</span>
                                </div>
                                <div className="img">
                                    <Image src={blogimg} alt="" />
                                </div>
                                <div className="des-inner">
                                    <h4>Have a glance over the features of our web development tools:</h4>
                                    <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                    <h4>Have a glance over the features of our web development tools:</h4>
                                    <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-30">
                            <BlogSidebar />
                        </div>
                    </div>
                    <div className="related-box">
                        <div class="beforeline"><h4 class="lining">related blogs</h4></div>
                        <div className="grid-container">
                            <div className="grid-item">
                                <div className="inner-div">
                                    <div className="img">
                                        <Image src={blogimg} alt="" />
                                    </div>
                                    <div className="des-inner">
                                        <h4>Have a glance over the features of our web development tools:</h4>
                                        <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                        <h4>Have a glance over the features of our web development tools:</h4>
                                        <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className="inner-div">
                                <div className="img">
                                    <Image src={blogimg} alt="" />
                                </div>
                                <div className="des-inner">
                                    <h4>Have a glance over the features of our web development tools:</h4>
                                    <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                    <h4>Have a glance over the features of our web development tools:</h4>
                                    <p>Web Steps Solutions is specialized in Mobile application development and enable your services and businesses to run on it in more efficient way. Through mobile application development we enable users to get entire info about your business and services. If you really want to compete in digital world where competition is technically superlative then your businesses and operations must be receptive to latest technology and advancements. Our innovative team work efficaciously and utilize latest tools and framework to enhance the performance of your businesses.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BlogSingal



