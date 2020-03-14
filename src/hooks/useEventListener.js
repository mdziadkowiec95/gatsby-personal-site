import { useEffect } from "react";

const useEventListener = (event, callback) => {
    useEffect(() => {
        document.addEventListener(event, callback);
        
        return function cleanup() {
          document.removeEventListener(event, callback);
        }
      }, [callback])
}

export default useEventListener;