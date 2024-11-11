import ReferralBanner from '@/components/ReferralBanner';
import ReferralFooter from '@/components/ReferralFooter';
import React from 'react';

const AppProvider = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex lg:justify-center">
            <div className="w-[1061px] flex flex-col">
                <ReferralBanner />
                {children}
                <ReferralFooter />
            </div>
        </div>
    );
};

export default AppProvider;
