import React from "react";

export const HeadingMain = (props) => {
    return (
        <h1 className= { props.className + " font-titillium lg:text-5xl 2xl:text-8xl text-3xl font-bol text-sky-400/95 z-10 "}>
              {props.children}
        </h1>
    )
}

export default HeadingMain;

export const HeadingSub = (props) => {
    return (
        <h1 className={props.className + " font-titillium text-2xl sm:text-3xl lg:text-5xl  font-bol text-sky-600/95  z-10"}>
              {props.children}
        </h1>
    )
}
