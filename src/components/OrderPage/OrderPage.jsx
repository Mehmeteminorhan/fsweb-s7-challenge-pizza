import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import React from 'react'
import './OrderPage.css'

export default function OrderPage(){
    return(
        <>
        <div className="order-header">
            <header>
                <img src="./Assets/mile1-assets/logo.svg" className="order-logo" />
                <div className="navigation">
                    <NavLink exact to = "/" activeClassName = "active-link" className="navbar">Anasayfa</NavLink>
                    <NavLink to = "/OrderPage" activeClassName = "active-link" className="navbar">Sipariş Oluştur</NavLink>
                </div>
            </header>
        </div>
        <main className="order-page">
            <h2>hello</h2>
        </main>
        </>
    )
}