import classNames from 'classnames';
import styles from './create-case.module.scss';

export interface CreateCaseProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreateCase = ({ className }: CreateCaseProps) => {
    return <div>
        <h1>Hello World</h1>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
        <p>hello world sub</p>
        <button>Click me</button>
    </div>;
};


