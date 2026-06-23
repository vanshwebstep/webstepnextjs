import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const projectImage1 = assetImage("Rectangle.png");
const projectImage2 = assetImage("Rectangle2.png");
const projectImage3 = assetImage("Rectangle3.png");
const projectImage4 = assetImage("download4.png");
const projectImage5 = assetImage("Rectangle5.png");
const projectImage6 = assetImage("Rectangle4.png");
const projectImage7 = assetImage("Rectangle6.png");
const projectImage8 = assetImage("Rectangle7.png");
const OurProjects = () => {
    // Array of image sources
    const projectImages = [
        projectImage1,
        projectImage2,
        projectImage3,
        projectImage4,
        projectImage5,
        projectImage6,
        projectImage7,
        projectImage8
    ];

    return (
        <>
            <section className="project">
                <div className="col-full">
                    <div className="beforeline">
                        <h4 className='lining'>our projects</h4>
                    </div>
                    <div className="grid-container">
                        {/* Mapping over the projectImages array */}
                        {projectImages.map((imageSrc, index) => (
                            <div className="grid-item" key={index}>
                                <Image src={imageSrc} alt={`Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="more-projects">
                        <ul>
                            <li><FaArrowLeft/></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li><FaArrowRight/></li>
                        </ul>
                        <div className="seemore"><button><a href="#">See more projects</a></button></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurProjects;



