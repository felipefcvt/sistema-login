
import React from 'react';
import GlobalStyles from './styles/GlobalStyles'; 
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyles />     
        </AuthProvider>
    );
};

export default App;