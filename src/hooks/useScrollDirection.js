import { useState } from 'react';
// import { throttle } from 'lodash'
import useEventListener from './useEventListener';

const useScrollDirection = (initialDirection) => {
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [direction, setDirection] = useState(initialDirection);

    // @TODO --- figure out how to "throttle" this function in functional component
    const hadndleDirectionChange = () => {
        if (lastScrollPos > window.pageYOffset) {
            setDirection('up');
          } else {
            setDirection('down');
          }
          setLastScrollPos(window.pageYOffset);
    }
    
    useEventListener('scroll', hadndleDirectionChange);
  
    return [direction, window.pageYOffset];
  }

  export default useScrollDirection;