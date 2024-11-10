'use client';
import { useState } from 'react';
import Image from 'next/image';

const TierChart = () => {
    const tiers = [
        { id: 1, label: 'Tier 1', imgTier: '/tier_1.png', rebate: '5%', commission1: '35%', commission2: '10%' },
        { id: 2, label: 'Tier 2', imgTier: '/tier_2.png', rebate: '7%', commission1: '30%', commission2: '10%' },
        { id: 3, label: 'Tier 3', imgTier: '/tier_3.png', rebate: '10%', commission1: '25%', commission2: '10%' },
        { id: 4, label: 'Tier 4', imgTier: '/tier_4.png', rebate: '12%', commission1: '20%', commission2: '10%' },
        { id: 5, label: 'Tier 5', imgTier: '/tier_5.png', rebate: '15%', commission1: '15%', commission2: '10%' },
        { id: 6, label: 'Tier 6', imgTier: '/tier_6.png', rebate: '20%', commission1: '10%', commission2: '10%' },
    ];

    const [selectedTier, setSelectedTier] = useState(tiers[0]);
    const [pathPoints] = useState([
        { x: 10, y: 90 }, // Vector 1
        { x: 30, y: 70 }, // Vector 2
        { x: 50, y: 50 }, // Vector 3
        { x: 70, y: 30 }, // Vector 4
        { x: 90, y: 10 }, // Vector 5
    ]);

    const handleTierClick = (tier) => {
        setSelectedTier(tier);
    };

    // Tính toán vị trí điểm trên đường cong dựa trên tỷ lệ
    const getPositionOnCurve = (progress) => {
        const index = Math.floor(progress * (pathPoints.length - 1));
        const nextIndex = Math.min(index + 1, pathPoints.length - 1);
        const segmentProgress = progress * (pathPoints.length - 1) - index;

        const x = pathPoints[index].x * (1 - segmentProgress) + pathPoints[nextIndex].x * segmentProgress;
        const y = pathPoints[index].y * (1 - segmentProgress) + pathPoints[nextIndex].y * segmentProgress;
        return { x, y };
    };

    const position = getPositionOnCurve((selectedTier.id - 1) / (tiers.length - 1));

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* SVG cho đường cong và điểm chạy */}
            <div className="w-full h-64 relative rounded-lg p-4">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Đường cong SVG dựa trên các điểm Vector */}
                    <path
                        d={`M 0 100 C 50 50, 50 50, 100 0`}
                        stroke="rgba(0, 123, 255, 0.6)"
                        strokeWidth="0.2"
                        fill="transparent"
                    />

                    {/* Các đường kẻ ngang */}
                    {[10, 30, 50, 70, 90].map((y) => (
                        <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="100"
                            y2={y}
                            stroke="rgba(255, 255, 255, 0.5)"
                            strokeWidth="0.1"
                            strokeDasharray="2"
                        />
                    ))}

                    {/* Điểm đánh dấu sẽ di chuyển dọc theo đường cong */}
                    <circle
                        cx={position.x}
                        cy={position.y}
                        r="0.6"
                        fill="white"
                        className="transition-all duration-500 ease-in-out rounded-full"
                    />
                </svg>

                {/* Thông tin Tier nằm dưới điểm chấm */}
                <div
                    className="absolute text-white p-2 bg-toggle rounded-lg"
                    style={{
                        left: `${position.x}%`,
                        bottom: `${100 - position.y - 28}%`, // Đặt thông tin dưới điểm chấm một chút
                        transform: 'translate(-50%, 0)',
                    }}
                >
                    <div className="text-[9.81px]">
                        <div>F0 (Rebate): {selectedTier.rebate}</div>
                        <div>F1 (Commission): {selectedTier.commission1}</div>
                        <div>F2 (Commission): {selectedTier.commission2}</div>
                    </div>
                </div>
            </div>

            {/* Các hình ảnh chọn Tier */}
            <div className="flex space-x-9 ">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        onClick={() => handleTierClick(tier)}
                        className={`cursor-pointer transition-transform duration-300 ${
                            tier.id === selectedTier.id ? 'scale-110 shadow-lg' : ''
                        }`}
                    >
                        <Image src={tier.imgTier} alt={tier.label} width={48} height={48} className="rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TierChart;
