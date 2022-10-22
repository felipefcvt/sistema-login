
import React from 'react';
import GlobalStyles from './styles/GlobalStyles'; //passo número 2
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyles />     {/* passo numero 3 */}
        </AuthProvider>
    );
};

export default App;