import React from 'react'
import { Link } from 'react-router-dom'
import '../components/_Navbar.scss'

const Navbar = () => {
    return (

        <>
            <div className='section1'>
                <div className='container'>
                    <div className='nav'>
                        <div className='navLeft'>
                            <img src="https://preview.colorlib.com/theme/security/img/logo.png.webp" alt="" />
                        </div>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About us</Link></li>
                            <li><Link to='/Service'>Service</Link></li>
                            <li><Link to='/Team'>Team</Link></li>
                            <li><Link to='/Price'>Price</Link></li>
                            <li><Link to='/Blog'>Blog</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li><Link to='/Pages'>Pages</Link></li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h6>OPENNING ON 21ST FEBRUARY, 2018
                        </h6>
                        <h1>Exhibition on Modern Era
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..
                        </p>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>

            <div className='section2'>
                <div className='container'>
                    <div className='services'>
                        <h4>Our Offered Services</h4>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <img src="https://preview.colorlib.com/theme/security/img/s1.jpg.webp" alt="" />
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <img src="https://preview.colorlib.com/theme/security/img/s2.jpg.webp" alt="" />
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <img src="https://preview.colorlib.com/theme/security/img/s3.jpg.webp" alt="" />
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section3'>
                <div className='container'>
                    <div className='services'>
                        <h4>Some Features that Made us Unique</h4>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                        <div className='card'>
                            <h4>Basic & Common Repairs</h4>
                            <p>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section4'>
                <div className='container'>
                    <ul>
                        <li>
                            <h1>2536</h1>
                            <p>Projects Completed</p>
                        </li>
                        <li>
                            <h1>6784</h1>
                            <p>Really Happy Clients</p>
                        </li>
                        <li>
                            <h1>1059</h1>
                            <p>Total Tasks Completed</p>
                        </li>
                        <li>
                            <h1>2239</h1>
                            <p>Cups of Coffee Taken</p>
                        </li>
                        <li>
                            <h1>434</h1>
                            <p>In House Professionals</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='section5'>
                <div className='container'>
                    <div className='services'>
                        <h4>Latest From Our Gallery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                    </div>
                    <div className='images'>
                        <img src="https://preview.colorlib.com/theme/security/img/g1.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g2.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g3.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g4.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g5.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g6.jpg.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/security/img/g7.jpg.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className='section6'>
                <div className='container'>
                    <div className='services'>
                        <h4>Latest From Our Blog</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                    </div>
                    <div className='cards'>
                        <div className='card'></div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='container'>
                    <ul className='colss4'>
                        <li><h6>About Us</h6></li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</li>
                        <li>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</li>
                    </ul>
                    <ul className='colss4'>
                        <li><h6>Newsletter</h6></li>
                        <li>Stay update with our latest</li>
                        <li><input placeholder='Enter Email' type="text" /></li>
                    </ul>
                    <ul className='colss2'>
                        <li><h6>Follow Us</h6></li>
                        <li>Let us be social</li>
                        <li>icons</li>
                    </ul>
                </div>
            </div>
        </>


    )
}

export default Navbar