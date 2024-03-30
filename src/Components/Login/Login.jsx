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
      <div className='flex justify-center max-w-1/2'>
        <form className='space-y-4 border p-2 rounded-lg '>
          <legend className='text-center'>Login Form</legend>
          <label htmlFor='email'> Email :</label>
          <input
            className='bg-slate-300 p-1 rounded-lg'
            name='email'
            type='text'
          />{' '}
          <br />
          <label htmlFor='pass'> Password :</label>
          <input
            className='bg-slate-300 p-1 rounded-lg'
            name='pass'
            type='text'
          />
          <br />
          <input
            type='submit'
            className='bg-green-500 text-[white] p-1 w-full rounded-md'
            value='Submit'
          />
          <div className='flex space-x-4'>
            <button className='bg-green-500 text-[white] p-1 rounded-md'>
              Login with Google
            </button>
            <button className='bg-green-500 text-[white] p-1 rounded-md'>
              Login with github
            </button>
          </div>
        </form>
      </div>
      <button onClick={handleClick}>Google Login</button>
    </div>
  );
};
