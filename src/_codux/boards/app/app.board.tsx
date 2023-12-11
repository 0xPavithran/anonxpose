import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: '#393333', windowWidth: 690,
        windowBackgroundColor: '#393933',
        canvasMargin: {
            top: 530
        }
    },
    isSnippet: false
});
