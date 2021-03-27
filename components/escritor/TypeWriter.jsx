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
        
          <Typist  avgTypingDelay={180} stdTypingDelay={100} onTypingDone={() => setCount(0)}>

            <h2 className="mt-5 h-36 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl  lg:w-96">
              <span className="block">Marketing + Tecnologia </span>

              <span className="block text-indigo-600">=</span>
              <Typist.Delay count={5} delay={2000} />
              <span className="block text-indigo-600"> Transformação Digital</span>
            
            </h2>
            
          </Typist>
        


      ) : (
        ""
      )}
    </>
  );
}

export default TypeWriter;