import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Button from './Button';

const StaffPassModal = (props) => {

    const [index, setIndex] = useState(0);

    const goBack = () => {
        if (index == 0)
            setIndex(props.images.length - 1)
        else
            setIndex(value => value = value - 1);
    }

    const goForward = () => {
        if (index == props.images.length - 1)
            setIndex(0)
        else
            setIndex(value => value = value + 1);
    }

    // handle when user key input while in modal

    const [keyData, setKeyData] = useState("");

    useEffect(() =>  {

        console.log(props.active, keyData.key, index)

        if (!props.active) return;

        if (keyData.key == "Escape")
            props.setActive(value => value = false)
        else if (keyData.key == "ArrowLeft")
            goBack();
        else if (keyData.key == "ArrowRight")
            goForward();

    }, [keyData]);

    useEffect(() => {
        document.addEventListener("keydown", (e) => setKeyData(e))
    }, [])

    return (
        <>
            <div className={`fixed w-screen h-screen bg-blue-50 z-[81] top-0 left-0 transition-all lg:p-7 `} style={{ opacity: props.active ? "1" : "0", pointerEvents: props.active ? "auto" : "none" }}>

                <button onClick={goBack} className="absolute top-1/2 left-0 lg:translate-x-1/4 lg:hover:scale-105 hover:scale-[0.55] lg:scale-100 scale-50 group z-10">
                    <svg width="150" height="150" fill="" className="group-active:fill-zinc-900/75 fill-zinc-900 transition-colors " viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </button>
                <button onClick={goForward} className="absolute top-1/2 left-full -translate-x-[100%] lg:scale-100 scale-50 lg:hover:scale-105 hover:scale-[0.55] transition-all group  z-10">
                    <svg width="150" height="150" fill="" className="group-active:fill-zinc-900/75 fill-zinc-900 transition-colors" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                    </svg>
                </button>

                <div>
                    {props.images.map((image, keyIndex) => {
                        return <div key={keyIndex} className={` absolute top-1/2 left-1/2 -translate-x-1/2 max-sm:-translate-y-1/4 sm:-translate-y-1/2 max-lg:w-full z-0  transition-all ${index == keyIndex ? "opacity-100" : "opacity-0"}`}>
                            <Image loading='lazy' src={image} />
                        </div>
                    })}
                </div>
                <button onClick={() => props.setActive(value => value = !value)} className="group-exit hover:scale-110 transition-all float-right z-50 relative">
                    <svg width="35" height="35" fill="currentColor" className=" fill-zinc-900 group-hover/exit:fill-zinc-800" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>
        </>
    )
};

export default StaffPassModal;
