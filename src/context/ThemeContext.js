import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ( { children } ) => {
    const [ dark, setDark ] = useState( () =>
        window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches
    );
    useEffect( () => {
        document.body.className = dark ? "bg-dark text-light" : "";
    }, [ dark ] );
    const toggleTheme = () => setDark( d => !d );

    return (
        <ThemeContext.Provider value={ { dark, toggleTheme } }>
            { children }
        </ThemeContext.Provider>
    );
};
