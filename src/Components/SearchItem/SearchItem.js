import React from 'react';
import classes from './SearchItem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

const SearchItem = ({searchByInput}) => {
    const searchHandler = ({target}) => {
        searchByInput(target.value.trim());
    }
    return (
        <div className={classes.searchItemDiv}>
            <div className={classes.searchBox}>
                <input onChange={searchHandler} placeholder={"请输入菜品"} className={classes.searchInput}/>
                <FontAwesomeIcon icon={faSearch} className={classes.searchIcon}/>
            </div>
        </div>
    );
};

export default SearchItem;
