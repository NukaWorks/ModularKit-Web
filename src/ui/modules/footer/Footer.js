import React from 'react';
import './Footer.scss';
import projManifest from '../../../../package.json';

const Footer = () => {
    return (
        <footer className="main-footer">
            <a className="titlemain-logo" href="https://www.nutdevs.org/">
                <img className="sunproj-logo" src="/logo192.png" height="48px"
                     width="48px"
                     alt="NutDevs.org Logo"/>
                <p>NutDevs.org</p>
            </a>

            <div className="projAbout">
                <p>© 2021 NutDevs.org - All right reserved.</p>
                <p className="buildinfo">{projManifest.name}<span>@</span>{projManifest.version}</p>
            </div>
        </footer>
    );
};

export default Footer;