// useNavigateHook.js
import { useNavigate } from 'react-router-dom';

export const useNavigateHook = () => {
    const navigate = useNavigate();

    const navigateToDelivery = (person) => {
        navigate('/delivery', { state: { person } });
    };

    return navigateToDelivery;
};
