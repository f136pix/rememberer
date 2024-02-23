import {createContext, ReactNode,useContext, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {IContextType, IUser} from "src/types";

import {toast} from "@/components/ui/use-toast.ts";
import {getCurrentUser} from "@/services/api/auth/authApi.ts";

const INITIAL_USER = {
    id: 0,
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {
    },
    setIsAuthenticated: () => {
    },
    checkAuthUser: async () => false as boolean
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);


const AuthProvider = ({children}: { children: ReactNode }) => {
    const pathname = useLocation();
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const checkAuthUser = async (): Promise<boolean> => {
        try {
            const currentUser: IUser = await getCurrentUser();
            if (!currentUser) {
                setIsAuthenticated(false);
                return false;
            }
            setUser(currentUser);
            setIsAuthenticated(true);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // onload da page, verificando se o user esta autenticado
    useEffect(() => {
        const publicRoute: boolean = (pathname.pathname == '/home' || pathname.pathname == '/auth');
        if (publicRoute) { // pags que nao necessitam autenticacao
            checkAuthUser()
                .then((bool: boolean) => {
                    if (bool) {
                        return navigate('/');
                    }
                });
            return;
        }
        checkAuthUser()
            .then((bool: boolean) => {
                if (!bool) {
                    navigate('/auth');
                    toast({
                        title:'Expired Session'
                    });
                    return;
                }
            });
    }, [pathname.pathname, navigate]);

    // values que serão exportados no authContext
    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);