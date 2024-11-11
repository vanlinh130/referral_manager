import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

export default function ReferralsLayout({ children }) {
    return (
        <section className="px-4 py-8 md:py-5 lg:py-4">
            <div className="flex flex-col gap-4">
                <Link href="/">
                    <div className="flex items-center gap-1 text-[#97CFFD]">
                        <IoMdArrowBack />
                        <span className="text-[24px] md:text-[18px] lg:text-[16px] font-medium leading-6 hover:underline ">
                            Back home
                        </span>
                    </div>
                </Link>
                {children}
            </div>
        </section>
    );
}
