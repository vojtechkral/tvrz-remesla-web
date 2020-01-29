import {useRef, useState} from 'react';

export default (timeout) => {
    const [show, setVisible] = useState(false);
    const timer = useRef(null);

    const clearTimer = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    };
    const onEnter = () => {
        clearTimer();
        timer.current = setTimeout(() => setVisible(true), timeout);
    };
    const onLeave = () => {
        clearTimer();
        setVisible(false);
    };
    return [show, onEnter, onLeave];
};
