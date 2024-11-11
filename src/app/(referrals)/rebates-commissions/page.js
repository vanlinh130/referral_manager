import Image from 'next/image';
import React from 'react';

function RebatesCommissions() {
    return (
        <div className="p-4 border-[1px] border-[#313856] rounded ">
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <div className="bg-vector w-[60px] h-[60px] flex items-center justify-center bg-red-500 rounded-sm border-[0.54px] border-solid border-[#ffffff33]">
                        <Image src="/vector_2.png" width={25.08} height={25.08} alt="Image vector" />
                    </div>
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Earn Rebates & Commissions
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
                                    Our program allows you to earn not only from referrals but also through rebates and
                                    commissions.
                                </span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Rebates: You receive a percentage rebate on your trades, reducing your
                                        transaction costs.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Commissions: For each trade completed by F1 and F2, you will receive a
                                        commission at a predetermined rate. F1 typically has a higher commission rate
                                        than F2.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Commission Rates:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">F0 (yourself): 5% rebate on your own trades.</li>
                                    <li className="text-[#FCFCFD]">
                                        F1: 35% commission on trades of people you directly refer.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        F2: 10% commission on trades by referrals of your F1.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Benefits:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Provides passive income from transactions within your referral network.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Encourages you to expand your network to maximize your earnings.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RebatesCommissions;
