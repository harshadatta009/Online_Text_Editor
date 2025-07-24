import { useEffect } from "react";

const useAutosave = ( content, setNotification ) => {
    useEffect( () => {
        localStorage.setItem( "editor-content", content );
        setNotification && setNotification( "Draft autosaved", "info" );
        // eslint-disable-next-line
    }, [ content ] );
};

export default useAutosave;

