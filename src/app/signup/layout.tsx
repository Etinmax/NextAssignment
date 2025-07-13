import React, { ReactNode } from 'react';

interface SignupLayoutProps {
    children: ReactNode;
}

const SignupLayout: React.FC<SignupLayoutProps> = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <main style={{ width: '100%', maxWidth: 400, padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                {children}

            </main>
        </div>
    );
};

export default SignupLayout;