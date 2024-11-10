import React from 'react';
import TierChart from './TierChart';
import HowItWorks from './HowItWorks';

const ReferralProgram = () => {
  return (
    <div className="bg-[#1a1b2f] text-white p-8 rounded-lg space-y-8">
      <h2 className="text-2xl font-semibold">
        Unlock Rewards with the Copin Referral Program
      </h2>
      <p className="text-lg">Earn rebates and commissions by inviting friends. Grow your network and benefit from our 6-tier reward system.</p>
      
      <button className="text-blue-500 hover:underline">View referral Ranking →</button>

      <TierChart />

      <HowItWorks />

      <div className="mt-8">
        <p className="text-center text-white">
          Apply <span className="text-blue-500">Copin Affiliate Program</span> to get more benefits!
        </p>
        <p className="text-center text-blue-500 mt-2">Contact us</p>
      </div>
    </div>
  );
};

export default ReferralProgram;
