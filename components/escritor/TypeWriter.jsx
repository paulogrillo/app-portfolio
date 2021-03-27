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
          h-full
          w-full
          flex
          justify-center
          
          "
          avgTypingDelay={150} 
          stdTypingDelay={200} 
          onTypingDone={() => setCount(0)}
          
          >
            <div className="">
            <h2 className=" lg:text-3xl sm:text-xl text-gray-900 w-full">
              <span className="">Marketing + Tecnologia = Transformação Digital </span> 
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