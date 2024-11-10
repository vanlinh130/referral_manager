import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import TierChart from './../components/TierChart';
import HowItWorks from './../components/HowItWorks';

export default function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center">
            <div className="flex flex-col w-[1061px]">
                <div className=" h-[279px] bg-header mt-[1px] border-b-[1px] border-b-[#313856]">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full px-10">
                        <div className="flex items-center">
                            <div className="w-[441px] flex flex-col gap-3">
                                <h2 className="text-[#FCFCFD] font-bold text-[24px] leading-6">
                                    Unlock Rewards with the Copin Referral Program
                                </h2>
                                <p className="text-[#C0C0C9] font-normal text-[13px] leading-6">
                                    Earn rebates and commissions by inviting friends. Grow your network and benefit from
                                    our 6-tier reward system.
                                </p>
                                <Link href="" className="text-[#97CFFD] flex items-center gap-2 hover:opacity-95">
                                    <button className="text-[13px] font-semibold leading-6">
                                        View referral Ranking
                                    </button>
                                    <GoArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <TierChart />
                        </div>
                    </div>
                </div>
                <div className="">
                    <HowItWorks />
                </div>
                <div className="p-4 ">
                    <div className="bg-[#101423] flex flex-col gap-1 py-12">
                        <p className="text-[#FCFCFD] font-bold text-[16px] leading-6 text-center">
                            Apply <span className="text-[#4EAEFD]">Copin Affiliate Program</span> <br />
                            to get more benefits!
                        </p>
                        <p className="text-[#4EAEFD] font-semibold text-[16px] leading-6 text-center cursor-pointer hover:opacity-95">
                            Contact us
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
