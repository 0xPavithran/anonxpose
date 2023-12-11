import classNames from 'classnames';
import styles from './navbar.module.scss';
import {Routes,Route} from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.navbar}><a href="/home">Home</a> | <a href="/projects">Projects</a> | <a href="/about">About</a> | <a href="/contact.txs">Contact Us</a></nav></div>
    );
};
