import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
            </div>
            <div>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/portfolio'
                        element={<Portfolio />}
                    />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </Router>
    );
}
