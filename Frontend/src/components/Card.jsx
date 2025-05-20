import React, { useEffect, useRef } from 'react';

export const Card = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;

    if (!stack) return;

    const cards = stack.querySelectorAll('.card');

    function rotateCard() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains('away')) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          card.style.zIndex = cards.length - index;
          angle -= 10;
        }
      });
    }

    function handleScroll() {
      const distance = window.innerHeight / 2;
      const topVal = stack.getBoundingClientRect().top;
      let index = Math.floor(-1 * (topVal / distance + 1));

      cards.forEach((card, i) => {
        if (i <= index) {
          card.classList.add('away');
        } else {
          card.classList.remove('away');
        }
      });

      rotateCard();
    }

    window.addEventListener('scroll', handleScroll);

    // Initial setup
    rotateCard();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={stackRef}
      className="w-[100%] h-[300vh] stack absolute flex justify-between"
    >
      <div className="w-[50%] h-[100vh] flex items-center sticky top-0">
        <h2>Hello there</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          veritatis quo maxime vitae non, eum, aliquam, ipsam minus dolorum
          rerum tempora ducimus beatae dicta nulla voluptatem quibusdam
          molestiae numquam cumque.
        </p>
      </div>
      <div className="w-[50%] h-[100vh] sticky top-0 flex justify-center items-center">
        <div className="card w-[20vw] h-[20vw] bg-white absolute top-[calc(50%-20vw)] rounded-md left-[calc(50%-20vw)]"></div>
        <div className="card w-[20vw] h-[20vw] bg-blue-900 absolute top-[calc(50%-20vw)] rounded-md left-[calc(50%-20vw)]"></div>
        <div className="card w-[20vw] h-[20vw] bg-red-700 absolute top-[calc(50%-20vw)] rounded-md left-[calc(50%-20vw)]"></div>
        <div className="card w-[20vw] h-[20vw] bg-green-600 absolute top-[calc(50%-20vw )] rounded-md left-[calc(50%-20vw)]"></div>
      </div>
    </div>
  );
};
