import React from 'react';

const Link = ({ route }) => {
    const { path, name } = route;
    return (
        <div>
            <li>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;