import { useState } from 'react';
import { useThrottledFn } from 'beautiful-react-hooks'; 
import PropTypes from 'prop-types'
import useEventListener from './useEventListener';

/**
 * @desc Custom hook to determine the direction of Y scroll
 * @param {string} initialDirection - initialDirection value, oneOf(['up', 'down']) 
 */

const useScrollDirection = (initialDirection) => {
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [direction, setDirection] = useState(initialDirection);

    const hadndleDirectionChange = useThrottledFn(() => {
        if (lastScrollPos > window.pageYOffset) {
            setDirection('up');
          } else {
            setDirection('down');
          }
          setLastScrollPos(window.pageYOffset);
    }, 200);
    
    useEventListener('scroll', hadndleDirectionChange);
  
    return [direction, window.pageYOffset];
  }

  useScrollDirection.propTypes = {
    initialDirection: PropTypes.oneOf(['asf','asf'])
  }

  export default useScrollDirection;