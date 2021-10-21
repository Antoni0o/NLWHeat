import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../context/auth';

import styles from './styles.module.scss';

export function Login() {
    const { signInUrl } = useContext(AuthContext);
    
    return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted/>
        Entrar com Github
      </a>
    </div>
  )
}