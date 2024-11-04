import { useState } from 'react';

export const useStepNavigation = (totalSteps: number) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return {
        currentStep,
        handlePrevStep,
        handleNextStep
    };
};
