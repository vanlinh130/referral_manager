import Image from 'next/image';
import React from 'react';

function TwoLevelReferral() {
    return (
        <div className="p-4 border-[1px] border-[#313856] rounded ">
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <div className="bg-vector w-[60px] h-[60px] flex items-center justify-center bg-red-500 rounded-sm border-[0.54px] border-solid border-[#ffffff33]">
                        <Image src="/vector_1.png" width={25.08} height={25.08} alt="Image vector" />
                    </div>
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Two-Level Referral System
                    </h3>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Content:
                    </h3>
                    <div className="border-l-[1px] border-l-[#313856] p-4">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">
                                    The two-level referral system allows you to earn commission from two levels of
                                    referrals: F1 (your direct referrals) and F2 (your referrals’ referrals).
                                </span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Level F1: These are the people you directly refer. Each time they make a
                                        transaction or engage in revenue-generating activities, you earn a commission.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Level F2: These are the people that your F1 referrals refer. You earn
                                        commissions from their activities, even though you didn’t directly invite them.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Benefits:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Increase your earnings by expanding your referral network.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Commissions are earned at both levels, providing long-term benefits from your
                                        network.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Example:
                    </h3>
                    <div className="border-l-[1px] border-l-[#313856] p-4">
                        <div className="flex flex-col gap-3">
                            <p className="text-[#FCFCFD]">
                                Suppose you refer 5 people (F1), and each of them refers 3 more people (F2). You will
                                earn commissions from both the 5 F1 and 15 F2, maximizing your income potential
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoLevelReferral;
