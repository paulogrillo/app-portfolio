import React, { useState } from 'react';
import Image from 'next/image'
import ItemsCarousel from 'react-items-carousel';
import { Center } from '@chakra-ui/layout';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        
        
        gutter={10}
        leftChevron={<button className="absolute inset-x-4 mb-32 text-2xl sm:text-4xl text-gray-700">{'<'}</button>}
        rightChevron={<button className="absolute inset-x-4 mb-32 text-2xl sm:text-4xl text-gray-700">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        
      >
          <Center>
          <div style={{ width: 160, height: 160, position: Center}}>

            <Image 
                src="/parceiros/google.jpg"
                width={160}
                height={96}
                className="w-40"
            />
            </div>
          </Center>
        
        <Center>
        <div style={{ width: 160, height: 160, }}>
            <Image 
                src="/parceiros/magento.jpg"
                width={160}
                height={96}
                className="w-40"
            />
        </div>
        </Center>

        <Center>
        <div style={{ width: 160, height: 160, }}>
            <Image 
                src="/parceiros/next.png"
                width={160}
                height={96}
                className="w-40"
            />
        </div>
        </Center>

        <Center>
        <div style={{ width: 160, height: 160, }}>
            

            <Image 
                src="/parceiros/rd.jpg"
                width={160}
                height={96}
                className="w-40"
            />
        </div>
        </Center>
        <Center>
        <div style={{ width: 160, height: 160, }}>
            <Image 
                src="/parceiros/react.png"
                width={160}
                height={96}
                className="w-40"
            />
        </div>
        </Center>

        <Center>
        <div style={{ width: 160, height: 160, }}>
            <Image 
                src="/parceiros/wordpress.jpg"
                width={160}
                height={96}
                className="w-40"
            />
        </div>
        </Center>


      </ItemsCarousel>
    </div>
  );
};