import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import {MemoryRouter} from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: '#393333', windowWidth: 1024,
        windowBackgroundColor: '#393933', windowHeight: 768,
    },
    isSnippet: false
});
