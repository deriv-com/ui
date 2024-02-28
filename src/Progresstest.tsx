import React, { useState } from 'react';
import { ProgressBar } from "../lib/components/ProgressBar";

const ParentComponent: React.FC = () => {
    // Example state to manage active index
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Example function to handle click on progress bar
    const handleProgressBarClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className='parent-component'>
            {/* Example usage of ProgressBar */}
            <ProgressBar
                activeIndex={activeIndex}
                count={5} // Example count, adjust as needed
                onClick={handleProgressBarClick}
            />
        </div>
    );
};

export default ParentComponent;
