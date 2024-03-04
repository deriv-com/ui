import React from 'react';
import { LinearProgressBar } from "../lib/components/ProgressBar";

const ParentComponent = () => {
    const isLoading = false; // Example loading state
    const dangerLimit = 10; // Example danger limit
    const warningLimit = 30; // Example warning limit
    const label = 'Remaining Time'; // Example label
    const percentage=5

    return (
        <div>
            <LinearProgressBar
                is_loading={isLoading}
                danger_limit={dangerLimit}
                warning_limit={warningLimit}
                label={label}
                percentage={percentage}
            />
            {/* Other content of the parent component */}
        </div>
    );
};

export default ParentComponent;
