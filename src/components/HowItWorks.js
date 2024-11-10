import Image from 'next/image';
import Link from 'next/link';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Two-Level Referral System',
            description: 'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals).',
            img: '/vector_1.png',
            link: '/two-level-referral',
        },
        {
            title: 'Earn Rebates & Commissions',
            description: 'Earn rebates on your trades and commissions from F1 and F2.',
            img: '/vector_2.png',
            link: '/rebates-commissions',
        },
        {
            title: 'Claim Daily Rewards',
            description: 'Rewards are credited after trades close and claimable daily at 0:00 UTC.',
            img: '/vector_3.png',
            link: '/daily-rewards',
        },
        {
            title: 'Referral Tier System',
            description: 'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.',
            img: '/vector_4.png',
            link: '/referral-tier-system',
        },
    ];

    return (
        <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
                <Image src="/lightbulb_filament.png" width={24} height={24} alt="Image lightbulb filament" />
                <h3 className="text-[#FCFCFD] text-[16px] font-medium leading-6">How It Works?</h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {steps.map((step, i) => (
                    <div key={i} className="p-4 border-[1px] border-[#313856] rounded hover:border-[#393f5d]">
                        <Link href={step.link}>
                            <div className="flex flex-col gap-6">
                                <div className="bg-vector w-[46px] h-[46px] flex items-center justify-center bg-red-500 rounded-sm border-[0.54px] border-solid border-[#ffffff33]">
                                    <Image src={step.img} width={22.08} height={22.08} alt="Image vector" />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <h3 className="text-[16px] text-[#FCFCFD] font-medium leading-6">{step.title}</h3>
                                    <p className="text-[#C0C0C9] font-normal text-[13px] leading-6">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
