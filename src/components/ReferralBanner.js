import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import TierChart from './TierChart';

const ReferralBanner = () => {
    return (
        <div className="bg-header mt-[1px] border-b-[1px] border-b-[#313856]">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full px-4 md:px-6 lg:px-10">
                <div className="py-[67px] flex items-center">
                    <div className="w-[441px] flex flex-col gap-5 md:gap-4 lg:gap-3">
                        <h2 className="text-[#FCFCFD] font-bold text-[40px] md:text-[30px] lg:text-[24px] leading-10 md:leading-7 lg:leading-6 ">
                            Unlock Rewards with the Copin Referral Program
                        </h2>
                        <p className="text-[#C0C0C9] font-normal text-[16px] lg:text-[13px] leading-6">
                            Earn rebates and commissions by inviting friends. Grow your network and benefit from our
                            6-tier reward system.
                        </p>
                        <Link href="" className="text-[#97CFFD] flex items-center gap-2 hover:opacity-95">
                            <button className="text-[24px] md:text-[18px] lg:text-[13px] font-semibold leading-6">
                                View referral Ranking
                            </button>
                            <GoArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <TierChart />
                </div>
            </div>
        </div>
    );
};

export default ReferralBanner;
