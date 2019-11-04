import {useEffect} from 'react'   //no need to import React as there is no JSX code

function useDocumentTitle(count) {
    useEffect(() => {
        console.log(count);
        document.title=`Count ${count}`
    }, [count])
}

export default useDocumentTitle
