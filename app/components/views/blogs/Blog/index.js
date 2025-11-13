import React from 'react';


export const H1 = ({children,className}) => {
    return (
        <h1 className={`lg:text-5xl text-2xl  font-extrabold ${className}`}>
            {children}
        </h1>
    );
};

export const H3 = ({children,className}) => {
    return (
        <h3 className={`text-xl font-extrabold ${className}`}>
            {children}
        </h3>
    );
};



export const P=({children,className}) => {
    return(
        <p className={`pt-5 text-xl ${className}`}>{children}</p>
    )
}