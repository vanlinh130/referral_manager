import Image from 'next/image';
import React from 'react';

function DailyRewards() {
    return (
        <div className="p-4 border-[1px] border-[#313856] rounded ">
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <div className="bg-vector w-[60px] h-[60px] flex items-center justify-center bg-red-500 rounded-sm border-[0.54px] border-solid border-[#ffffff33]">
                        <Image src="/vector_3.png" width={25.08} height={25.08} alt="Image vector" />
                    </div>
                    <h3 className="text-[28px] md:text-[20px] lg:text-[18px] text-[#FCFCFD] font-medium leading-6">
                        Claim Daily Rewards
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
                                    With the daily rewards program, you can earn bonuses from the transactions in your
                                    network.
                                </span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        How it works: Each day at 0:00 UTC, the system automatically credits bonuses
                                        from completed trades of you and your F1 and F2 referrals to your account.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Benefit: This reward is a passive income that you receive daily without having
                                        to take any action.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Conditions:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Trades must be completed before 0:00 UTC each day to count for the reward..
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        The reward is credited directly to your wallet and can be withdrawn or used for
                                        other activities.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#FCFCFD]">Note:</span>
                                <ul className="list-disc px-4">
                                    <li className="text-[#FCFCFD]">
                                        Rewards may vary based on the number and size of trades.
                                    </li>
                                    <li className="text-[#FCFCFD]">
                                        Users should check regularly to monitor their daily reward balance.
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

export default DailyRewards;
