import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import AboutPage from '../pages/AboutPage'
import CollectionPage from '../pages/CollectionsPage'
import ContactPage from '../pages/ContactPage'
import MenPage from '../pages/MenPage'
import WomenPage from '../pages/WomenPage'
import NotFound from '../pages/NotFound'
import User from '../pages/User'
const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/collection" element={<CollectionPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/men" element={<MenPage/>} />
            <Route path="/women" element={<WomenPage/>} />
            <Route path="/user" element={<User/> } />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default MainRoute
