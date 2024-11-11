import React from 'react';

const ReferralFooter = () => {
    return (
        <div className="p-4">
            <div className="bg-[#101423] flex flex-col gap-1 py-16">
                <p className="text-[#FCFCFD] font-bold text-[24px] md:text-[18px] lg:text-[16px] leading-9 md:leading-7  lg:leading-6 text-center">
                    Apply <span className="text-[#4EAEFD]">Copin Affiliate Program</span> <br />
                    to get more benefits!
                </p>
                <p className="text-[#4EAEFD] font-semibold text-[18px] lg:text-[16px] leading-6 text-center cursor-pointer hover:opacity-95">
                    Contact us
                </p>
            </div>
        </div>
    );
};

export default ReferralFooter;
