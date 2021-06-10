import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Users.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Users = () => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    let className = cx({
        button: true,
        clicked: clicked,
    });
    return (
        <header className="card">
            <h1>Users</h1>
            <button
                className={className}
                onClick={() => {
                    setClicked(true);
                    history.push('/form');
                }}
            >
                Authorization
            </button>
        </header>
    );
    //ras unda aketebdes?

    //Buy now amaze fer iunda daedos
};
export default Users;
