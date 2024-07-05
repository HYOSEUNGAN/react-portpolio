import React, { useState, useEffect } from 'react';

const useCountUp = (end, start = 0, duration = 500) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let animationFrameId = null;
    let currentNumber = start;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 300) {
        // 현재 애니메이션 중인 경우 중지
        cancelAnimationFrame(animationFrameId);

        // 새로운 애니메이션 시작
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // 시작부터 끝 값까지 부드럽게 증가
          const newCount = Math.round(start + (end - start) * progress);
          setCount(newCount);

          // 애니메이션이 끝나면 중지
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          }
        };

        animationFrameId = requestAnimationFrame(step);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, start, duration]);

  return count;
};

export default useCountUp;
