import React, { useState } from 'react';
function AssetSearch(props) {
    const [searchTerm, setSearchTerm] = useState('');
    function handleSearch(event) {
        event.preventDefault();
        props.onSearch(searchTerm);  