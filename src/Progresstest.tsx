import React from 'react';
import { LinearProgressBar } from "../lib/components/ProgressBar";

const ParentComponent: React.FC = () => {
    return (
        <div className='parent-component'>
            {/* Example usage of ProgressBar */}
            <LinearProgressBar
                is_loading={true}
                percentage={50}
                label="text"
            />
        </div>
    );
};

export default ParentComponent;
