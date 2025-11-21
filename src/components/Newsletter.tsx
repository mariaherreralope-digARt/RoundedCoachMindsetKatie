"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function Newsletter() {
  return (
    <section className=" px-0 ">
      <div className=" mx-auto  bg-gradient-to-b from-lighter via-light/50 to-light overflow-hidden">
        <div className=" max-w-6xl mx-auto px-16 py-16  md:py-15">
          <div className="relative h-[50vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-light text-dark sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 focus:outline-none rounded-bl-3xl"
              />
              <button className="w-full sm:w-auto cursor-pointer btn-squared rounded-tr-3xl flex items-center gap-2">
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
