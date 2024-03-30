import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export const Login = () => {
  const [user, setuser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleClick = e => {
    e.preventDefault();
    console.log('clicked');
    signInWithPopup(auth, provider)
      .then(res => setuser(res.user))
      .catch(er => console.log(er));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signOut success');
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div>
      <div className='flex justify-center max-w-1/2'>
        <form className='space-y-4 border p-2 rounded-lg '>
          <legend className='text-center'>Login Form</legend>
          <label htmlFor='email'> Email :</label>
          <input
            className='bg-slate-300 p-1 rounded-lg ml-[28px]'
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
            {user ? (
              <>
                <button
                  onClick={handleClick}
                  className='bg-gray-400 btn text-[white] p-1 flex items-center space-x-3 rounded-md'
                >
                  <span> Login with Google </span>
                  <FaGoogle />
                </button>
                <button className='btn bg-gray-400 text-[white] p-1 flex items-center space-x-3 rounded-md'>
                  <span>Login with github</span> <FaGithub />
                </button>
              </>
            ) : (
              <button
                onClick={handleSignOut}
                className='btn bg-gray-400 text-[white] p-1 flex items-center space-x-3 rounded-md'
              >
                SignOut
              </button>
            )}
            <button
              onClick={handleSignOut}
              className='btn bg-gray-400 text-[white] p-1 flex items-center space-x-3 rounded-md'
            >
              SignOut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
