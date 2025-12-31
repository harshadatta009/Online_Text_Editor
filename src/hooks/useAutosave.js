import { useEffect, useRef } from "react";

const useAutosave = ( content, setNotification ) => {
    const hasMounted = useRef( false );
    useEffect( () => {
        if ( !hasMounted.current ) {
            hasMounted.current = true;
            return;
        }
        localStorage.setItem( "editor-content", content );
        setNotification && setNotification( "Draft autosaved", "info" );
        // eslint-disable-next-line
    }, [ content ] );
};

export default useAutosave;

