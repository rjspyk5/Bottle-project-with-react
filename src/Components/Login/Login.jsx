import { getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

export const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        console.log(res);
      })
      .catch(er => console.log(er));
  };
  return (
    <div>
      <button onClick={handleClick}>Google Login</button>
    </div>
  );
};
