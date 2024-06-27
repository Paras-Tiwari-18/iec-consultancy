import React from 'react';
import brief1_data from '../json-components/brief1'; 

const BriefComponent = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            {brief1_data.map((item, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
                    <p className="text-gray-800">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BriefComponent;
