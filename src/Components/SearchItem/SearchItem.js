import React, {useEffect, useState} from 'react';
import classes from './SearchItem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

const SearchItem = ({searchByInput}) => {
    const [keywords, setKeywords] = useState('');

    const searchHandler = ({target}) => {
        setKeywords(target.value.trim())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            searchByInput(keywords);
        }, 500)
        return () => {
            clearTimeout(timer)
        };
    }, [keywords]);

    return (
        <div className={classes.searchItemDiv}>
            <div className={classes.searchBox}>
                <input
                    value={keywords}
                    onChange={searchHandler}
                    placeholder={"请输入菜品"}
                    className={classes.searchInput}/>
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.searchIcon}/>
            </div>
        </div>
    );
};

export default SearchItem;
