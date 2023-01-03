import React from 'react'


const Button = (props) => {
  return (
    <>
       <button onClick={props.onClick} className={props.className + ` font-nunito bg-zinc-800 hover:bg-zinc-700 rounded-md transition-all text-zinc-100 border-zinc-600 border border-solid  hover:border-transparent 
         lg:px-5 lg:py-3 px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base`}> 
            {props.children}
      </button>
    </>
  )
};

export default Button;
