"use client";
import React from 'react'
import Image from 'next/image';

const Comp = (props) => {
    return (
        <div className="bg-gray-100 p-2 px-10 lg:px-12 py-4 h-[100%] flex flex-col gap-4 mb-6 rounded-lg " >
            <h3 className=" text-md sm:text-lg" >{props.title}</h3>
            <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="" >
                    {props.info1}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                <Image src={props.photo} className="rounded-lg" />
            </div>
            <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="mb-4" >
                    {props.info2}
                </p>
                <Image src={props.photo2} className="ml-2 rounded-lg h-[300px] w-[350px] lg:h-[350px] md:w-[500px]" />
            </div>
        </div>
    )
}
export default Comp;