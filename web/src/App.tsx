import './App.css'
import {AppRoutes} from "@/routes";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthContext from "@/context/AuthContext.tsx";

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthContext>
                    <AppRoutes/>
                </AuthContext>
            </QueryClientProvider>
        </>
    )
}

export default App
