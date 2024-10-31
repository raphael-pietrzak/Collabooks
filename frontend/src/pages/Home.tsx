// src/HomePage.tsx
import React from 'react';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
    return (

        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>
                Welcome to the home page of our app. This is a public page, accessible to everyone.
            </p>
        </div>
    );
}

export default HomePage;