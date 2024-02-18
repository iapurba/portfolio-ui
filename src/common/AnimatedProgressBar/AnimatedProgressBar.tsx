import { useEffect, useRef, useState } from "react";
import { CustomLinearProgress } from "./AnimatedProgressBar.styles";

interface AnimatedProgressBarProps {
    isVisible?: boolean;
    percentage: number;
}
const AnimatedProgressBar = ({ percentage }: AnimatedProgressBarProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                if (progress < percentage) {
                    setProgress(prevProgress => prevProgress + 0.5);
                }
            }, 5); // Adjust the interval to control the speed of animation

            return () => clearInterval(interval);
        }
    }, [isVisible, percentage, progress]);

    return <CustomLinearProgress ref={progressBarRef} variant="determinate" value={progress} />;
};

export default AnimatedProgressBar;