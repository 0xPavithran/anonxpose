import classNames from 'classnames';
import styles from './silkroad.module.scss';

export interface SilkroadProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Silkroad = ({ className }: SilkroadProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1>Silkroad</h1>
        <div />   <h2>Silk Road Transactions</h2>
        <table>
            <thead>
                <tr>
                    <th>From Address</th> {'\u00A0'}{'\u00A0'}
                    <th>To Address</th>{'\u00A0'}{'\u00A0'}
                    <th>Date & Time</th>{'\u00A0'}{'\u00A0'}
                    <th>Value (BTC)</th>{'\u00A0'}{'\u00A0'}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</td>{'\u00A0'}{'\u00A0'}
                    <td>3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64</td>{'\u00A0'}{'\u00A0'}
                    <td>2023-01-05 14:30 PM</td>{'\u00A0'}{'\u00A0'}
                    <td>0.7</td>{'\u00A0'}{'\u00A0'}
                </tr>
                <tr>
                    <td>3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64</td>{'\u00A0'}{'\u00A0'}
                    <td>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</td>{'\u00A0'}{'\u00A0'}
                    <td>2023-01-10 08:45 AM</td>{'\u00A0'}{'\u00A0'}
                    <td>1.2</td>{'\u00A0'}{'\u00A0'}
                </tr>
                <tr>
                    <td>bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</td>{'\u00A0'}{'\u00A0'}
                    <td>bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</td>{'\u00A0'}{'\u00A0'}
                    <td>2023-01-15 18:20 PM</td>{'\u00A0'}{'\u00A0'}
                    <td>0.5</td>{'\u00A0'}{'\u00A0'}
                </tr>
                <tr>
                    <td>15qx2NUn2ExxLxRbGNR88YsuFRzP9NtCkw</td>{'\u00A0'}{'\u00A0'}
                    <td>3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64</td>{'\u00A0'}{'\u00A0'}
                    <td>2023-02-01 12:10 PM</td>{'\u00A0'}{'\u00A0'}
                    <td>0.9</td>{'\u00A0'}{'\u00A0'}
                </tr>
                <tr>
                    <td>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</td>{'\u00A0'}{'\u00A0'}
                    <td>15qx2NUn2ExxLxRbGNR88YsuFRzP9NtCkw</td>{'\u00A0'}{'\u00A0'}
                    <td>2023-02-05 21:15 PM</td>{'\u00A0'}{'\u00A0'}
                    <td>0.8</td>{'\u00A0'}{'\u00A0'}
                </tr>
            </tbody>

        </table>
    </div>;
};
