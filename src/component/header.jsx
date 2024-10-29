import { motion } from 'framer-motion';
import { useState } from 'react';

import logo from '../assets/svg/logo.svg'
import '../styles/header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLink, setIsLink] = useState([false, false, false, false]);

    function toggleButton() {
        setIsOpen(!isOpen);
        document.getElementsByClassName('navbar')[0].classList.toggle('show')
        document.getElementsByClassName('signup-button')[0].classList.toggle('show-button')

    }
    function toggleLink(ev) {
        const index = Array.from(document.getElementsByClassName('links')).indexOf(ev.target);
        setIsLink(
            [...isLink].map((link, i) => i === index?!link : link)
        );
    }
    return (
        <div className='header'>
            <section className='main-cover'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    Ryide
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className='navbar'
                >
                    <div onClick={toggleLink} className='links'>
                        Home
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isLink[0] ? { width: '100%' } : { width: '0' }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '1px',
                                backgroundColor: '#31A0FE',
                            }}
                        />
                    </div>
                    <div onClick={toggleLink} className='links'>
                        About
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isLink[1] ? { width: '100%' } : { width: '0' }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '1px',
                                backgroundColor: '#31A0FE',
                            }}
                        />
                    </div>
                    <div onClick={toggleLink} className='links'>
                        Contact
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isLink[2] ? { width: '100%' } : { width: '0' }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '1px',
                                backgroundColor: '#31A0FE',
                            }}
                        />
                    </div>
                    <div onClick={toggleLink} className='links'>
                        Blog
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isLink[3] ? { width: '100%' } : { width: '0' }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '1px',
                                backgroundColor: '#31A0FE',
                            }}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.1, }}
                    animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }}
                    transition={{
                        duration: 0.8, ease: "easeOut"
                    }}
                    className='signup-button'
                >
                    Sign Up
                </motion.div>
                <motion.button
                    initial={{ backgroundColor: '#ffffff' }}
                    whileHover={{ backgroundColor: '#0056b3' }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    animate={isOpen ? "open" : "closed"}
                    style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                    className='toggle' onClick={toggleButton}
                >
                    <motion.div
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 7 }
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '20px', height: '2px', backgroundColor: 'black' }}
                    />
                    <motion.div
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '20px', height: '2px', backgroundColor: 'black' }}
                    />
                    <motion.div
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -7 }
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '20px', height: '2px', backgroundColor: 'black' }}
                    />
                </motion.button>
            </section>

        </div>
    )
}

export default Header