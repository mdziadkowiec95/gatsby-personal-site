import { useEffect } from "react";

const useEventListener = (event, callback) => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener(event, callback);
      }
        
        return function cleanup() {
          if (typeof window !== 'undefined') {
            window.removeEventListener(event, callback);
          }
        }
      }, [callback])
}

export default useEventListener;