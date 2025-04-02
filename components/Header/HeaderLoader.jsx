"use client";

import React, { useEffect, useState } from 'react';

function HeaderLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200">
      <div 
        className="h-full bg-red-500 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default HeaderLoader;