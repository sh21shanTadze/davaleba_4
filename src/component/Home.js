import { useEffect, useState } from 'react';
import styles from '../Title.module.css';
function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) => res.map((user) => user.username))
            .then((userNames) => setData(userNames));
    });
    if (data) {
        return data.map((x, index) => <p key={index}>{x}</p>);
    } else {
        return <h2 className={styles.bold}>Loading...</h2>;
    }
}

export default Home;
