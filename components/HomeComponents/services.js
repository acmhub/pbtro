import React from 'react';
import Link from 'next/link';

const servicesData = [
    {
        icon: 'support_agent',
        title: 'Consultanta',
        description: 'Specialiștii noștri sunt mereu la dispoziția clienților cu recomandări și informații.'
    },
    {
        icon: 'verified',
        title: 'Calitate',
        description:
            'Nu doar arhitectura și stilul amenajării interioare și exterioare contează, ci și materialele utilizate, dar mai ales calitatea acestora.'
    },
    {
        icon: 'precision_manufacturing',
        title: 'Productie',
        description:
            'Folosim materii prime și accesorii de cea mai bună calitate, cu aparatură mânuită de experți în producția de tâmplărie.'
    },
    {
        icon: 'square_foot',
        title: 'Masuratori',
        description:
            'Măsuratorile corecte sunt extrem de importante. Noi realizăm această etapă cu cea mai mare atenție, în orice tip de clădire sau încăpere.'
    },
    {
        icon: 'local_shipping',
        title: 'Livrare',
        description: 'Grație flotei noastre proprii, putem programa și transporta orice tip de tâmplarie sau sticlă.'
    },
    {
        icon: 'tools_power_drill',
        title: 'Montaj',
        description:
            'Montăm și verificăm după realizare, cu mare atenție. Totul pentru siguranța și confortul clienților noștri!'
    }
];

export default function Services({ t }) {
    return (
        <div className="container-padding space-y-10">
            <h1 className="text-center">Servicii oferite de noi</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {servicesData.map((e, i) => (
                    <div className="card" key={i}>
                        <div className="flex items-center space-x-2">
                            <span className="material-symbols-outlined text-theme1 text-4xl md-48">{e.icon}</span>
                            <div>{e.title}</div>
                        </div>
                        <p>{e.description}</p>
                    </div>
                ))}
            </div>
            <Link href="/servicii" passhref>
                <a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto">
                    <span>Mai multe informatii</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link>
        </div>
    );
}
