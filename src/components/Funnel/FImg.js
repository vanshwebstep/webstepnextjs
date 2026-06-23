import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const review = assetImage("reviews.png");

const FImg = () => {
  return (
    <>
    <section className="f-section">
      <div className="col-full">
      <div className="max1024 center">
      <div className="review-img"><Image src={review} alt="" /></div>
      </div>
      </div>
    </section>
    </>
  )
}

export default FImg



