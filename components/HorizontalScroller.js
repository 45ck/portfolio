import React, { useRef, useEffect, useState } from 'react';

const HorizontalScroller = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    startScrolling();
  }, []); // Run the effect only once when the component mounts

  const startScrolling = () => {
    // Get the container element and its width
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
  
    // Set the initial scroll position to the starting position of the first element
    container.scrollLeft = 0;
  
    // Calculate the total width of all elements
    let totalWidth = 0;
    Array.from(container.children).forEach(child => {
      totalWidth += child.offsetWidth;
    });

    console.log(totalWidth);
  
    // Set the speed of the scroll animation
    const scrollSpeed = 100; // pixels per second
  
    // Start the scroll animation
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollPos = (progress / 1000) * scrollSpeed % (totalWidth * 2);
      console.log(scrollPos)
      if (scrollPos < totalWidth) {
        container.scrollLeft = scrollPos;
      } else {
        container.scrollLeft = scrollPos - totalWidth;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <div ref={containerRef} style={{overflowX: 'hidden'}} className="flex text-white">
     {children}
    </div>
  );
};

const ChildElementOfH = () => { 
  const element = useRef();

  const [position, setPosition] = useState(0);

  useEffect(() => {
    element.offsetWidth
  }, []);

  <div ref={element} className='p-5 border-zinc-500 bg-zinc-600 h-screen'>
      test
  </div>
}

export default HorizontalScroller;
