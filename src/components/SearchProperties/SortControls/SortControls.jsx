import SortBy from './SortBy';
import { SortContainer } from './SortControls.styles'

function SortControls({ updateSort }) {
    return (
        <SortContainer maxWidth={false}>
            <SortBy updateSort={updateSort} />
        </SortContainer>
    );
}

export default SortControls;
