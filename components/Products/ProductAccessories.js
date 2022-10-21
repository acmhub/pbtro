import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';

export default function ProductAccessories({ data, t }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="space-y-4">
            <h2 className="text-center">Accesorizare</h2>
            <Tabs value={activeTab} centered={true} aria-label="basic tabs example">
                {data.map((e, i) => (
                    <Tab label={e.tab} onClick={() => setActiveTab(i)} key={i} />
                ))}
            </Tabs>
            {data.map(
                (e, i) =>
                    activeTab === i && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2" key={i}>
                            {e.items.map((item, index) => (
                                <div
                                    role="tabpanel"
                                    aria-labelledby={`simple-tab-${index}`}
                                    value={activeTab}
                                    index={index}
                                    key={index}
                                >
                                    <div className="relative h-40 w-auto">
                                        <Image src={item.src} alt={item.name} layout="fill" objectFit="contain" />
                                    </div>
                                    <div className="text-center">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    )
            )}
        </div>
    );
}
