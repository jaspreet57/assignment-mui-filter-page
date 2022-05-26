// custom hook to store properties data and actions
import { useCallback, useEffect, useState } from 'react'
import { properties as initialData } from './data/propertyList'

export const usePropertiesList = () => {
    const [properties, setProperties] = useState(initialData);
    const [filters, setFilters] = useState({});

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
    }, [filters])

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

    return [properties, updateFilters]
}