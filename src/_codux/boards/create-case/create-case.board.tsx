import { createBoard } from '@wixc3/react-board';
import { CreateCase } from '../../../components/create-case/create-case';

export default createBoard({
    name: 'Create Case',
    Board: () => <CreateCase />,
    isSnippet: true,
});
