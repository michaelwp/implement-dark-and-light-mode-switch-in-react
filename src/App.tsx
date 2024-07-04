// src/App.tsx

import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="p-4 text-center">
                <h1 className="text-2xl mb-4">React Dark Mode Toggle</h1>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default App;
