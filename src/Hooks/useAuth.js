import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

// Use Contexts
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;