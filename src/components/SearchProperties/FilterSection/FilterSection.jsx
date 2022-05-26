import BhkType from './BhkType';
import FurnishingType from './FurnishingType';
import { FilterContainer } from './FilterSection.styles';

function FilterSection() {
    return (
        <FilterContainer maxWidth={false}>
                <BhkType />
                <FurnishingType />
        </FilterContainer>
    );
}

export default FilterSection;
