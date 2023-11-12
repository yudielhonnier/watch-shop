'use-client';

import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';

import classes from './auth-form.module.css';

import Modal from '@/components/modals/Modal';

async function createUser(email: string, password: string) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm({
  isOpenModal,
  closeModal,
}: {
  isOpenModal: boolean;
  closeModal: () => void;
}) {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(
    event: React.FormEvent<HTMLFormElement> | undefined
  ) {
    let enteredEmail = '';
    let enteredPassword = '';

    if (event != undefined) {
      event.preventDefault();

      if (emailInputRef.current != undefined) {
        enteredEmail = emailInputRef.current.value;
      }
      if (passwordInputRef.current != undefined) {
        enteredPassword = passwordInputRef.current.value;
      }

      // optional: Add validation

      if (isLogin) {
        const result = await signIn('credentials', {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });
        if (result != null) {
          if (!result.error) {
            // set some auth state
            router.replace('/');
            enqueueSnackbar('User logged correctly', { variant: 'success' });
          }
        } else {
          try {
            const result = await createUser(enteredEmail, enteredPassword);
            result.acknowledged &&
              enqueueSnackbar(result.message, { variant: 'success' });
          } catch (error) {
            enqueueSnackbar('Problems creating the user', { variant: 'error' });
          }
        }
      }
    }
  }

  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button type='submit'>
              {isLogin ? 'Login' : 'Create Account'}
            </button>
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default AuthForm;
