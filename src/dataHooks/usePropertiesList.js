// custom hook to store properties data and actions
import { useCallback, useEffect, useState } from 'react'
import { properties as initialData } from './data/propertyList'

export const usePropertiesList = () => {
    const [properties, setProperties] = useState(initialData);
    const [filters, setFilters] = useState({});
    const [sortValue, setSortValue] = useState();

    // apply filters
    useEffect(() => {
        const filterList = Object.entries(filters);
        if (filterList.length === 0) {
            setProperties(initialData);
        }
        let newData = [...initialData];
        filterList.forEach(([key, value]) => {
            newData = newData.filter(item => (value || []).includes(item[key]))
        });
        setProperties(newData);
    }, [filters]);

    useEffect(() => {
        console.log('Updating for sort: ', sortValue)
        if (sortValue === 'Price : Low - High') {
            setProperties(current => [...current.sort((a, b) => a.rentValue - b.rentValue)]);
        } else if (sortValue === 'Price : High - Low') {
            setProperties(current => [...current.sort((a, b) => b.rentValue - a.rentValue)]);
        } else {
            setProperties(current => [...current.sort((a, b) => a.id - b.id)]);
        }
    }, [sortValue])

    const updateFilters = useCallback((filterKey, filterValue) => {
        setFilters(current => {
            const newFilters = { ...current };
            if (!filterValue || filterValue.length === 0) {
                delete newFilters[filterKey];
            } else {
                newFilters[filterKey] = filterValue;
            }
            return newFilters;
        });
    }, []);

    return [properties, updateFilters, setSortValue]
}