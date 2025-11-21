"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function Newsletter() {
  return (
    <section className=" px-0 ">
      <div className=" mx-auto  bg-light overflow-hidden">
        <div className=" max-w-6xl mx-auto px-16 py-16  md:py-15">
          <div className="relative md:h-[50vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left content */}
            <div className=" max-w-lg text-center md:text-left">
              <h2 className=" mb-4 text-dark title">
                Join the Community
              </h2>
              <p className="text-darker paragraph">
                Weekly insights, new worksheets, and workshop invites — delivered with gentle encouragement and practical tools.
              </p>
            </div>
            {/* Right content */}
            <div className="flex flex-col sm:flex-row  sm:gap-0">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-light text-dark border border-dark sm:w-auto md:w-80 px-4 sm:px-4 py-4 sm:py-4 focus:outline-none md:rounded-bl-3xl rounded-tl-3xl"
              />
              <button className="w-full sm:w-auto cursor-pointer btn-squared rounded-br-3xl md:rounded-tr-3xl flex items-center px-4 sm:px-4 py-4 sm:py-4 md:gap-2 ">
                <span>Connect</span>
                <HiArrowRight className="size-5" />
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
