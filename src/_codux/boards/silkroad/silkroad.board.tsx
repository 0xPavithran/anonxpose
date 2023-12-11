import { createBoard } from '@wixc3/react-board';
import { Silkroad } from '../../../components/silkroad/silkroad';

export default createBoard({
    name: 'Silkroad',
    Board: () => <Silkroad />,
    isSnippet: true,
});
