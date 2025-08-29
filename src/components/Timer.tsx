import React from 'react';

interface TimerProps {
  timeLeft: number;
  isActive: boolean;
  formatTime: (seconds: number) => string;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, isActive, formatTime }) => {
  return (
    <div className="contact__timer">
      <span className={`timer ${isActive ? 'timer--active' : ''}`}>
        {formatTime(timeLeft)}
      </span>
      <span className={`timer__label ${isActive ? 'timer__label--active' : ''}`}>
        {isActive 
          ? "We're processing your request... please wait"
          : "We'll respond before the timer runs out"
        }
      </span>
    </div>
  );
};

export default Timer;
