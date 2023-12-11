import classNames from 'classnames';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h1>Contact AnonXpose</h1>
                <div />
            </div>
            <form >Send Secure Message To Us:<br />
                <label>First name:</label>
                <input type="text" />
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                <label> Last name:</label>
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                <input type="text" />
                <br />
                <label>
                    {' '}
                    Email: {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    <input />
                </label>
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                {'\u00A0'}
                <label>
                    Ph.no(optional):
                    <input type="number" />
                </label>
                <br />
                <label>Select Your Country</label>
                <select>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Japan</option>
                    <option>China</option>
                </select>
                <br />
                <label>Describe Your Issue with the transaction hash:<br />
                    <textarea />
                    <br /></label>

                <input type="submit" value="SEND" />
            </form>
        </div>
    );
};
