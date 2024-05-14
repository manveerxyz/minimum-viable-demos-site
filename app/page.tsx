'use client'

import Image from "next/image";
import Draggable from 'react-draggable';

// make drop shadow custom classes for active and inavtive
// 

export default function Home() {
  return (
    
    <div className="relative bg-white h-screen w-full">
      <div className="">

        
      <Draggable>
        <div className="relative w-[425px] h-[400px] rounded-xl bg-neutral-900 border border-neutral-700 overflow-hidden">
          <div className="absolute w-[423px] h-[398px] border rounded-xl border-white opacity-20"></div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-full bg-neutral-700 flex flex-row items-center">
                <div className="pl-3 flex flex-row items-center space-x-2">
                  <div className="h-3.5 w-3.5 rounded-full bg-red-400"></div>
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-400"></div>
                  <div className="h-3.5 w-3.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="flex flex-col p-5">
                <Image className="draggable-false"
                              src="/desc.png"
                              alt=""
                              draggable="false"
                              width={400}
                              height={400}
                              layout=""
                              objectFit=""
                              priority
                            />
              </div>
            </div>
        </div>
      </Draggable>
      <div className="absolute top-12 left-12 z-100">          
        <Draggable>
            <div className="drop-shadow-2xl">
                {/* <a className="text-black" href="/about">test</a> */}
                <Image className="draggable-false rounded-xl"
                        src="/logoweb.png"
                        alt=""
                        draggable="false"
                        width={200}
                        height={200}
                        layout=""
                        objectFit=""
                        priority
                      />
              </div>
          </Draggable>
      </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">        
        <Draggable>
          <div className="drop-shadow-2xl">
            {/* <a className="text-black" href="/about">test</a> */}
            <Image className="draggable-false"
                    src="/terminal.png"
                    alt=""
                    draggable="false"
                    width={400}
                    height={400}
                    layout=""
                    objectFit=""
                    priority
                  />
          </div>
        </Draggable>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-6/8 z-40">        
        <Draggable>
          <div className="drop-shadow-2xl">
            {/* <a className="text-black" href="/about">test</a> */}
            <Image className="draggable-false"
                    src="/hands.png"
                    alt=""
                    draggable="false"
                    width={500}
                    height={500}
                    layout=""
                    objectFit=""
                    priority
                  />
          </div>
        </Draggable>
      </div>
      
      </div>
    
    </div>
      

  );
}
