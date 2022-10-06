import React from 'react';
import dynamic from 'next/dynamic';

function Testimonials({ t }) {
    return (
        <div>
            <div className="container-padding">Testimonials</div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
