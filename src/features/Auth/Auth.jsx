import { configureApi } from '../../helpers/api.helper';

import styles from './Auth.module.css';
import { Button } from '../../components/Button/Button';

const { add: register } = configureApi('register');

export function Auth() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const user = Object.fromEntries(data.entries());
    delete user.retype_password;
    // for (const [key, value] of data.entries()) {
    //   user[key] = value;
    // }
    const auth = await register(user);
    console.log(auth);
  }

  return (
    <>
      <h1>Register</h1>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" />

        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="password" />

        <label htmlFor="retype_password">Retype Password</label>
        <input name="retype_password" id="retype_password" type="password" />

        <label htmlFor="firstName">First Name</label>
        <input name="firstName" id="firstName" type="text" />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" id="lastName" type="text" />

        <div className={styles.submitBtn}>
          <Button variant="primary">Register</Button>
        </div>
      </form>
    </>
  );
}
