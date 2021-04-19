import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/categories.css';

export class Categories extends Component {

    render() {

        return (
            <section>
                <Navbar/>
                <div>
                    <h1 className="h1-categories">Business</h1>
                </div>
                <div className="page-categories">
                    <ul>
                        <li>
                            <img className="ellipse" src="img/Ellipse 3.svg" alt=""/>
                        </li>
                        <li className="li-categories"><h2>Categories</h2></li>
                        <li className="li-categorie"><a href="#top"> Art & Fashion</a></li>
                        <li className="li-categorie"><a href="#top">Biography</a></li>
                        <li className="li-categorie"><a href="/business">Business</a></li>
                        <li className="li-categorie"><a href="#top">Children's</a></li>
                        <li className="li-categorie"><a href="#top">Education</a></li>
                        <li className="li-categorie"><a href="#top">Fiction e Poetry</a></li>
                        <li className="li-categorie"><a href="#top">Film, TV e Drama</a></li>
                        <li className="li-categorie"><a href="#top">Food & Drink</a></li>
                        <li className="li-categorie"><a href="#top">Health & Wellbeing</a></li>
                        <li className="li-categorie"><a href="#top">History & Politics</a></li>
                        <li className="li-categorie"><a href="#top">Home & Gaeden</a></li>
                        <li className="li-categorie"><a href="#top">Languages With Grant</a></li>
                        <li className="li-categorie"><a href="#top">Sport & Hobbies</a></li>
                        <li className="li-categorie"><a href="#top">Travel & Maps</a></li>
                    </ul>
                </div>
                <div className="categories-books">
                    <div className="categories-book">
                        <img className="book-c1" src="img/cover1.svg" alt=""/>
                        <p className="p1-bookc1">Kevin Kwan</p>
                        <p className="p2-bookc1">Crazy rich asians</p>
                        <img className="stars-bookc1" src="img/rating-1.svg" alt=""/>
                        <p className="text-bookc1">the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</p>
                        <p className="price-bookc1">R$24.12</p>
                        <p className="discount-bookc1">R$14.99</p>
                        <button className="btn-bookc1" type="submit">BUY NOW</button>
                    </div>
                    <div className="categories-book">
                        <img className="book-c2" src="img/cover2.svg" alt=""/>
                        <p className="p1-bookc2">Margaret Atwood</p>
                        <p className="p2-bookc2">The handmaid’s tale</p>
                        <img className="stars-bookc2" src="img/rating-3.svg" alt=""/>
                        <p className="text-bookc2">This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...</p>
                        <p className="price-bookc2">R$18.99</p>
                        <p className="discount-bookc2">R$6.99</p>
                        <button className="btn-bookc2" type="submit">BUY NOW</button>
                    </div>
                    <div className="categories-book">
                        <img className="book-c3" src="img/cover3.svg" alt=""/>
                        <p className="p1-bookc3">Aldous Huxley</p>
                        <p className="p2-bookc3">Brave new world</p>
                        <img className="stars-bookc3" src="img/rating-3.svg" alt=""/>
                        <p className="text-bookc3">dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...</p>
                        <p className="price-bookc3">R$42.50</p> 
                        <p className="discount-bookc3">R$12.43</p>
                        <button className="btn-bookc3" type="submit">BUY NOW</button>                         
                    </div>
                    <div className="categories-book">
                        <img className="book-c4" src="img/cover4.svg" alt=""/>
                        <p className="p1-bookc4">Tara Westover</p>
                        <p className="p2-bookc4">Educated</p>
                        <img className="stars-bookc4" src="img/rating-4.svg" alt=""/>
                        <p className="text-bookc4">It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...</p>
                        <p className="discount-bookc4">R$12.68</p>
                        <p className="price-bookc4">R$34.20</p>
                        <button className="btn-bookc4">BUY NOW</button>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default Categories;