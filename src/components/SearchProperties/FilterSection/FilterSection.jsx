import BhkType from './BhkType';
import FurnishingType from './FurnishingType';
import { FilterContainer } from './FilterSection.styles';

const FilterSection = ({ updateFilters }) => {

    return (
        <FilterContainer maxWidth={false}>
                <BhkType updateFilter={updateFilters} />
                <FurnishingType updateFilter={updateFilters} />
        </FilterContainer>
    );
}

export default FilterSection;
