import React from 'react'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const workload = assetImage("workload.png");
const suckimg = assetImage("FM-FE-4.png");
const setting = assetImage("setting-img.png");
const Suck = () => {
  return (
    <>
      <section className="funel-suck padding60">
        <div className="col-full">
          <div className="suck-inner max-1140">
            <div className="center">
              <h3>So What’s The Alternative? <span className="block"> Use Something Already Built?</span></h3>
              <h2>BUT Let’s Face It… “Done-For-You” <span className="block">List Building Funnels SUCK</span></h2>
            </div>
            <div className="devider gap20 mt-4">
              <div className="col-50">
                <div className="suck-content listing-box">
                  <h3>Done-For-You Funnels Take Work</h3>
                  <p>Ever been excited about a new done-for-you funnel collection, only to find that they’re not quite right for what you need it to do.</p>
                  <ul>
                    <li><b>•</b>Rewrite the pages to match your offer</li>
                    <li><b>•</b>Add your code (CODE?!?!??! arrg!)</li>
                    <li><b>•</b>Add your name and links in emails</li>
                    <li><b>•</b>Upload emails to your autoresponder</li>
                  </ul>
                  <p>Sometimes finding something for your niche to begin with is hard enough. It looks good at first glance, but yikes! It ends up being so much work you’re better off starting over.</p>
                  <p>No wonder you didn’t use it, right?</p>
                </div>
              </div>
              <div className="col-50 end-align">
                <div className="suck-img">
                  <Image src={workload} alt="" />
                </div>
              </div>
              <div className="col-50">
                <div className="suck-img">
                  <Image src={suckimg} alt="" />
                </div>
              </div>
              <div className="col-50">
                <div className="suck-content listing-box">
                  <h3>They Cost A LOT</h3>
                  <p>You might be thinking if only you could pay the $297/month for ClickFunnels all your funnel problems would be over.</p>
                  <p>YES! They have templates and these glorious one-click solutions that make you look professional in a snap…</p>
                  <p>BUT even with the supposedly magic money-making software, you still need to:</p>
                  <ul>
                    <li><b>•</b>Write sales copy (that converts…)</li>
                    <li><b>•</b>Design the pages</li>
                    <li><b>•</b>Create the lead magnet</li>
                    <li><b>•</b>Write the email follow ups</li>
                    <li><b>•</b>Pray to God it makes some sales so you can cover next month’s rebill!</li>
                  </ul>
                </div>
              </div>

              <div className="col-50">
                <div className="suck-content listing-box">
                  <h3 className='blue'>And The One Thing People Seem To Turn A Blind Eye To…</h3>
                  <h3>They Get Outdated FAST</h3>
                  <p>Once you’ve finally got your lead magnet set up, chances are … it might not be relevant for as long as you’d like.</p>
                  <p>For real success you need something new, fresh, promoting hot products AS THEY LAUNCH or getting leads into your services and to your sales pages as they happen.</p>
                </div>
              </div>
              <div className="col-50  end-align">
                <div className="suck-img ">
                  <Image src={setting} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Suck



