import Image from 'next/image';
import React from 'react';

export default function TierChart() {
    const tiers = [
        { label: 'Tier 1', imgTier: '/tier_1.png' },
        { label: 'Tier 2', imgTier: '/tier_2.png' },
        { label: 'Tier 3', imgTier: '/tier_3.png' },
        { label: 'Tier 4', imgTier: '/tier_4.png' },
        { label: 'Tier 5', imgTier: '/tier_5.png' },
        { label: 'Tier 6', imgTier: '/tier_6.png' },
    ];

    return (
        <div className="w-[378px] ">
            <div className=""></div>
            <div className="flex items-center justify-between">
                {tiers.map((tier, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <Image src={tier.imgTier} width={30} height={30} alt="images tier" />
                        <p className="text-[#FCFCFD] text-[12px] text-center leading-[13.8px] font-normal">
                            {tier.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
