import React, { createContext, useState, useRef, useEffect } from "react";

export const EditorContext = createContext();

export const EditorProvider = ( { children } ) => {
    const [ content, setContent ] = useState( "" );
    const [ notification, setNotification ] = useState( null );

    const timeoutRef = useRef();

    const showNotification = ( msg, type = "info" ) => {
        setNotification( { msg, type } );
        // Clear any existing timeout to prevent overlapping
        if ( timeoutRef.current ) clearTimeout( timeoutRef.current );
        timeoutRef.current = setTimeout( () => setNotification( null ), 1800 );
    };

    // Clean up timeout if component unmounts
    useEffect( () => {
        return () => {
            if ( timeoutRef.current ) clearTimeout( timeoutRef.current );
        }
    }, [] );

    return (
        <EditorContext.Provider value={ {
            content, setContent, notification, showNotification
        } }>
            { children }
        </EditorContext.Provider>
    );
};
