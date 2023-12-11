import classNames from 'classnames';
import styles from './investigator-portal.module.scss';

export interface InvestigatorPortalProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const InvestigatorPortal = ({ className }: InvestigatorPortalProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Investigator Dashboard</h1>
            <div />
            <p>Select Dark Web Site:</p>
            <button onClick={() => handleSiteSelect('silkroad')}>Silk Road</button>
            <button onClick={() => handleSiteSelect('hydramarket')}>Hydra Market<div /></button>
            <p>Alerts:</p>

            <button onClick={() => handleCreateAlerts}>Create New Alerts</button>
            <button onClick={() => handleManageAlerts}>Manage Alerts</button>
        </div>

    );
};
