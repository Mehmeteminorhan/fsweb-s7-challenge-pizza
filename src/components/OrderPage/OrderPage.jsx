import { Link, NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useTransition } from 'react'
import './OrderPage.css'


const icindekilerList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak",
    "Biber", "Mozarella", "Ananas", "Kabak"
];



export default function OrderPage(){
    const [pizza,setPizza] = useState('');
    const [size,setSize] = useState('');
    const [kalinlik, setKalinlik] = useState('');
    const [extraicerik,setExtraicerik] = useState([]);
    const [note,setNote] = useState('');
    const [sayi,setSayi] = useState(1);
    const [hata,setHata] = useState({});
    const ucret = 85.5;
    const extraucret = 5;
    const history = useHistory();
    
    const IngredientChange = (ingredient) => {
        setExtraicerik((prev) => {
            if(prev.includes(ingredient)){
                return prev.filter((item) => item !== ingredient);
            }else{
                if(prev.length < 10) {
                    return [...prev,ingredient]
                }else {
                    return prev
                }
            }

        })}












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
            <h2>Position Absolute Acı Pizza</h2>
        </main>
        </>
    )
}