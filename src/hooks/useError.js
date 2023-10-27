import {useState} from 'react';

const ERROR_REMOVE_TIME = 3000;

const useError = () => {
    const [error, setError] = useState(null);

    const handleError = (err) => {
        if (err.response) {
            setError(err.response.data.message);
        } else {
            setError('Failed to fetch data.');
        }
        const timer = setTimeout(() => {
            setError(null);
            clearTimeout(timer);
        }, ERROR_REMOVE_TIME);
    };

    return {
        error,
        setError,
        handleError,
    };
};

export default useError;
