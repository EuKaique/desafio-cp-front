import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/cart.css'

export class Cart extends Component {
    render() {
        return (
            <section>
                <Navbar/>
                <div>
                    <h1 className="h1-cart">Your cart</h1>
                </div>
                <div className="cart">
                    <img className="cart-book1" src="img/cover1.svg" alt=""/>
                    <p className="p1-book1">Crazy rich asians</p>
                    <p className="p2-book1">Kevin Kwan</p>
                    <p className="text-book1">the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</p>
                    <p className="price-book1">R$14.99</p>
                    <p className="portion-book1">1x R$14.99</p>
                    <div className="btn1-qtd">
                        <input type="button" value="-"/>
                        <input type="button" value="+"/>
                    </div>
                </div>
                <div className="cart">
                    <img className="cart-book2" src="img/cover2.svg" alt=""/>
                    <p className="p1-book2">The handmaid’s tale</p>
                    <p className="p2-book2">Margaret Atwood</p>
                    <p className="text-book2">This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...</p>
                    <p className="price-book2">R$69.98</p>
                    <p className="portion-book2">2x R$34.99</p>
                    <div className="btn2-qtd">
                        <input type="button" value="-"/>
                        <input type="button" value="+"/>
                    </div>
                </div>
                <button className="btn-checkout" type="submit">Checkout</button>
                <Footer/>
            </section>
        )
    }
}

export default Cart;