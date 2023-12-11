import { createBoard } from '@wixc3/react-board';
import { InvestigatorPortal } from '../../../components/investigator-portal/investigator-portal';

export default createBoard({
    name: 'Investigator Portal',
    Board: () => <InvestigatorPortal />,
    isSnippet: true,
});
