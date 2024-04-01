import { useState, useEffect } from 'react';

const useDeviceWidth = (): number => {
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

    const calculateDeviceWidth = () => setDeviceWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', calculateDeviceWidth);
        return () => {
            window.removeEventListener('resize', calculateDeviceWidth);
        };
    }, []);

    return deviceWidth;
};

export default useDeviceWidth;
