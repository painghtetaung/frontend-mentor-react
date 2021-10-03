import React, { useState, useRef, useEffect } from 'react';

const FilterBar = ({setSearchName}) => {
        const [state, setState] = useState('')

        const searchByName = (e) => {
            const value = e.currentTarget.value;
            setState(value);  
        }

        useEffect(() => {
            const timer = setTimeout(() => {
                setSearchName(state);
              }, 300);
            
            return () => clearTimeout(timer)
        }, [setSearchName, state])
    return (
        <div>
            <input type="text" 
                placeholder="Search for a country..."
                onChange={searchByName}
            />
        </div>
    )
}

export default FilterBar;