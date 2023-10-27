import {useState} from 'react';

const EXTRA_LOADING_TIME = 300;

const useLoading = () => {
    const [loading, setLoading] = useState(true);

    const handleLoading = () => {
        const timeId = setTimeout(() => {
            setLoading(false);
            clearTimeout(timeId);
        }, EXTRA_LOADING_TIME);
    };

    return {
        loading,
        setLoading,
        handleLoading,
    };
};

export default useLoading;
