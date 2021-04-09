import React, { useState, useEffect } from "react";
import Typist from "react-typist";




function TypeWriter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count + setCount);
    setCount(1);
  }, [count]);

  return (
    <>
       
      {count ? (
         
         
          <Typist  
          className="
          
          bg-white
          w-full
          h-full
          flex
          justify-center
          
          "
          avgTypingDelay={150} 
          stdTypingDelay={200} 
          onTypingDone={() => setCount(0)}
          
          >
            <div className="backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200">
            <h2 className=" lg:text-4xl sm:text-xl  font-mono">
              <span className="text-gray-900">Marketing + Tecnologia = </span> 
              <span className="text-red-600"> Transformação Digital </span> 

            </h2>
            </div>
            <Typist.Delay ms={800} />
          </Typist>
          

      ) : (
        ""
      )}
    </>
  );
}

export default TypeWriter;