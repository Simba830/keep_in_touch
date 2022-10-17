import React, { useState } from 'react';
import server from '../../backend/server';
import styles from './LoginPage.module.css';

const LoginPage = ({ setUser }) => {
  const [login, setLogin] = useState('');
  const users = [
    {
      name: "Tony",
      login: "user1"
    },
    {
      name: "Peter",
      login: "user2"
    },
    {
      name: "Wade",
      login: "user3"
    },
    {
      name: "Natasha",
      login: "user4"
    },
    {
      name: "Thor",
      login: "user5"
    },
    {
      name: "Bruce",
      login: "user6"
    },
    {
      name: "Stephen",
      login: "user7"
    },
    {
      name: "Loki",
      login: "user8"
    },
    {
      name: "Arthur",
      login: "user9"
    },
    {
      name: "Kal-El",
      login: "user10"
    },
    {
      name: "Lao",
      login: "user11"
    },
    {
      name: "Yuri",
      login: "user12"
    }
  ];

  const loginUser = (login) => {
    server.get(`server/api/login?user=${login}`)
    .then(user => {
      setUser(user);
    })
  }

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginPage__title}>
        <span className={styles.loginPage__titlePart}>Welcome</span>
        <span className={styles.loginPage__titlePart}>to</span>
        <span className={styles.loginPage__socialNetworkName}>Keep in touch</span>
      </h1>

      <p className={styles.loginPage__description}>
        The test login page to check the functionality of this social network for different users.
      </p>

      <div className={styles.loginPage__field}>
        <input
          className={styles.loginPage__input}
          type='text'
          placeholder='Enter your login...'
          value={login}
          disabled
        />

        <button
          className={styles.loginPage__btn}
          onClick={() => (
            login
            ? loginUser(login)
            : null
          )}
        >
          LogIn
        </button>
      </div>

      <p className={styles.loginPage__hint}>
        Select a user below and click the "LogIn" button. 
      </p>

      <div className={styles.loginPage__users}>
        {users.map(user => (
          <button
            key={user.login}
            className={styles.loginPage__user}
            onClick={() => setLogin(user.login)}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
