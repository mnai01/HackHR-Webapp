import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.about}>
                <h2>Safe Distance</h2>
                <p>Safe Distance is an app that helps monitor and promote social distancing protocols to provide a safer and healthier workplace environment.</p>
            </div>
            <div className={classes.repos}>
                <h3>Who Are We?</h3>
                <ul>
                    <li><a href='https://github.com/julian-hecker'>Julian Hecker</a>, Web App & Frontend</li>
                    <li><a href='https://github.com/mnai01'>Ian Matlak</a>, Mobile + Web App &amp; Frontend</li>
                    <li><a href='https://github.com/J-Obog'>Joshua Obogbaimhe</a>, Backend API</li>
                </ul>
            </div>
            <div className={classes.copy}>
                <p>Copyright &copy; 2020</p>
            </div>

        </footer>
    );
}

export default Footer;
