import Image from 'next/image';
import React from 'react';

function ReferralTierSystem() {
    return (
        <div className="p-4 border-[1px] border-[#313856] rounded ">
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <div className="bg-vector w-[60px] h-[60px] flex items-center justify-center bg-red-500 rounded-sm border-[0.54px] border-solid border-[#ffffff33]">
                        <Image src="/vector_4.png" width={25.08} height={25.08} alt="Image vector" />
                    </div>
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Referral Tier System
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
                                    Our referral tier system is based on the total transaction fees paid by you and your
                                    network (F0, F1, and F2) over the past 30 days. As you reach higher tiers, you
                                    receive more benefits.
                                </span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Tier Levels: The system includes six levels (Tier 1 to Tier 6), each with
                                        specific requirements for the transaction fees amount.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Benefits: The higher the level, the higher the rebate and commission rates you
                                        earn from transactions made by F1 and F2.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Requirements for Each Tier:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">Tier 1: Total transaction fees under 500 USD.</li>
                                    <li className="text-[#FCFCFD]">
                                        Tier 2: Total transaction fees from 500 USD to 1,000 USD.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Tier 3: Total transaction fees from 1,000 USD to 5,000 USD.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Tier 4: Total transaction fees from 5,000 USD to 10,000 USD.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Tier 5: Total transaction fees from 10,000 USD to 20,000 USD.
                                    </li>
                                    <li className="text-[#FCFCFD]">Tier 6: Total transaction fees above 20,000 USD.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Higher Tier Benefits:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">Higher rebate and commission rates.</li>
                                    <li className="text-[#FCFCFD]">
                                        Additional rewards and privileges from the program.
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

export default ReferralTierSystem;
