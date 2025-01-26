import React, { useEffect } from "react";
import "./LineAnimation.css";

const LineAnimation: React.FC = () => {
  useEffect(() => {
    const line = document.querySelector("#line") as SVGPathElement;
    const animatedLineMask = document.querySelector("#animated-line-mask use") as SVGPathElement;
    const lineLength = line.getTotalLength();
    const numDashes = 14;

    const playContinuousDashes = () => {
      // Define dashes and gaps
      animatedLineMask.style.strokeDasharray = `${lineLength / (numDashes * 2 - 1)} ${lineLength / (numDashes * 2 - 1)}`;
      // Start with full offset
      animatedLineMask.style.strokeDashoffset = `${lineLength}`;

      setTimeout(() => {
        animatedLineMask.style.transitionDuration = "20s";
        animatedLineMask.style.transitionProperty = "stroke-dashoffset";
        animatedLineMask.style.transitionTimingFunction = "linear";
        animatedLineMask.style.strokeDashoffset = "0";
      }, 10);
    };

    const resetAnimation = () => {
      animatedLineMask.style.transition = "none"; // Reset transition
      animatedLineMask.style.strokeDashoffset = `${lineLength}`; // Reset offset
      playContinuousDashes(); // Restart the animation
    };

    playContinuousDashes();

    // Automatically restart the animation every 20 seconds
    const intervalId = setInterval(() => {
      resetAnimation();
    }, 20000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="line-animation-container">
      <svg viewBox="0 0 560 98">
        <defs>
          <path
            id="line"
            d="M108 10S-8 30 21 67c41 44 66-71 161-2 95 70 181-58 122-57-58 0-34 76 60 76 95 0 54-72 113-71s69 70 69 70"
          />
          <mask id="animated-line-mask">
            <use xlinkHref="#line" />
          </mask>
        </defs>
        <use xlinkHref="#line" id="animated-line" mask="url(#animated-line-mask)" />
      </svg>
    </div>
  );
};

export default LineAnimation;
