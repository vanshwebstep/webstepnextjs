"use client"
import { React, useMemo, useState } from 'react'
import { MdSafetyCheck } from "react-icons/md";
import { FaCcMastercard, FaCcVisa, FaIdCard, FaPaypal, FaUserCheck } from "react-icons/fa6";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import countryList from 'react-select-country-list'
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiOutlineDownload } from "react-icons/hi";
import Countdown from './Countdown';
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const banklogo = assetImage("banklogo.png");

const Checkout = () => {
    const [value, setValue] = useState('')
    const option = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    const options = Array.from({ length: 15 }, (_, index) => index + 1);
    const startYear = 2024;
    const endYear = 2039;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
    const targetDate = '2024-12-31T00:00:00';
    return (
        <>
            <section className="checkout-sec">
                <div className="col-full">
                    <div className="checkout-inner bg-white max-1024">
                        <div className="btn-blue rounded">
                            <ul>
                                <li><a href=''><MdSafetyCheck />Secure Order</a></li>
                                <li><a href=''><HiOutlineCheckBadge />100% Money Back Guarantee</a></li>
                                <li><a href=''><FaUserCheck />instant Access</a></li>
                            </ul>
                        </div>
                        <div className="d-flex">
                            <div className="cols">
                                <Image src={banklogo} alt="" />
                            </div>
                            <div className="cols">
                                <select name="" id="">
                                    <option label="German" value="">German</option>
                                    <option label="English" value="" selected="selected">English</option>
                                    <option label="Spanish" value="">Spanish</option>
                                    <option label="French" value="">French</option>
                                    <option label="Italian" value="">Italian</option>
                                    <option label="Portuguese" value="">Portuguese</option>
                                </select>
                            </div>
                        </div>
                        <div className="bg-pink timer-box">
                            <h2><span>HURRY! Fast Action 20% Discount Automatically Applied</span>COUPON CODE &quot;20OFF&quot; Expires In:</h2>
                            <div className="timer">
                            <Countdown targetDate={targetDate} />
                            </div>
                        </div>
                        <button className="w-100 bg-grey"><AiOutlineSafetyCertificate />Secure Checkout</button>
                        <div className="d-flex">
                            <div className="col-50">
                                <div className="user-infos">
                                    <h4><FaUserCheck />Customer Information</h4>
                                    <form action="">
                                        <label htmlFor="">Email Address</label>
                                        <input type="email" name="" id="" />
                                    </form>
                                </div>
                                <div className="billing-inf">
                                    <h4>Billing Information</h4>
                                    <div className="button-groups">
                                        <button className="btn"><FaIdCard />Credit Card</button>
                                        <button className="btn"><FaPaypal />Paypal</button>
                                    </div>
                                    <form action="">
                                        <div className="form_group">
                                            <label htmlFor="">Cardholder Name</label>
                                            <input type="name" name="" id="" />
                                        </div>
                                        <div className="form_group">
                                            <label htmlFor="">Card <span className="logos_card"><FaCcMastercard /><FaCcVisa /></span></label>
                                            <input type="number" name="" id="" />
                                        </div>
                                        <div className="form_group d-flex">
                                            <div className="cols w-30">
                                                <label htmlFor="">Expiration Date</label>
                                                <select>
                                                    {options.map((option, idx) => (
                                                        <option key={idx} value={option.toString().padStart(2, '0')}>
                                                            {option.toString().padStart(2, '0')}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="cols w-30">
                                                <select>
                                                    {years.map((year, idx) => (
                                                        <option key={idx} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>
                                            <div className="cols w-40">
                                                <label htmlFor="">Security Code</label>
                                                <input type="number" name="" id="" />
                                                <a href="">What is this?</a>
                                            </div>
                                        </div>
                                        <div className="form_group d-flex">
                                            <div className="cols w-60">
                                                <label htmlFor="">Country</label>
                                                <select options={option} value={value} onChange={changeHandler} />
                                            </div>
                                            <div className="cols w-40">
                                                <label htmlFor="">zip code</label>
                                                <input type="number" name="" id="" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-50">
                                <div className="order-summary">
                                    <h4> <RiShoppingBag3Fill />Order Summary</h4>
                                    <div className="summary-inner">
                                        <h2>FunnelMates Access</h2>
                                        <h5><HiOutlineDownload />Digital Product</h5>
                                        <div className="select-box">
                                            <div className="text-right">3,152.61 INR</div>
                                            <select name="" id="">
                                                <option value="">USD - US Dollar</option>
                                                <option value="" selected='selected'>INR - Indian Rupee</option>
                                            </select>
                                        </div>
                                        <div className="summary-description">
                                            <ul>
                                                <li><b>Subtotal</b><span>3,152.61 INR</span></li>
                                                <li><b>VAT</b><span>567.47 INR</span></li>
                                                <li><b>TOTAL</b><span>3,720.08 INR</span></li>
                                            </ul>
                                            <p>Immediate access to this product or service is available once payment is approved.</p>
                                            <p className="mt-4">By clicking Pay Now below, I agree to the Terms of Sale.</p>
                                        </div>
                                        <button className="paybtn bg-pink">Pay Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="guarantee-box">
                            <h4>ClickBank Guarantee</h4>
                            <p>ClickBank will allow for the return or replacement of any product within 30 days from the date of purchase. For more details see our return policy.
                                Your purchase will appear on your statement under the name CLKBANK*COM.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Checkout



