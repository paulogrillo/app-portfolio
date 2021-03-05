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
    <div className="h-40 sm:mb-48 px-12 "  >

      {count ? (
        <div>
          <Typist avgTypingDelay={120} onTypingDone={() => setCount(0)}>

            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              <span class="block">Marketing, Peformance</span>

              <span class="block">&</span>
              <Typist.Delay count={5} delay={2000} />
              <span class="block text-indigo-600">Transformação Digital</span>

            </h2>

          </Typist>
        </div>


      ) : (
        ""
      )}
    </div>
  );
}

export default TypeWriter;