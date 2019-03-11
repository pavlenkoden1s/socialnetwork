import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { SignIn } from './containers/signInContainer';
import { SignUp } from './containers/signupContainer';


export const routes = [
    {
      title: 'Home',
      path: '/',
      exact: true,
      props: {
        title: 'SocialNetwork'
      },
      Component: () => <h1>home</h1>
    },
    {
      title: 'Post',
      path: '/post/:postId',
      exact: true,
      props: {
        title: 'Post detail'
      },
      Component: (props: RouteChildrenProps<{postId: string}>) => {
        console.log(props.match);
        return <div>Product: {props.match!.params.postId}</div>
      }
    },
    {
      title: 'About',
      path: '/about',
      Component: () => <h1>Hello from about page</h1>
    },
    {
      title: 'Sign In',
      path: '/sign-in',
      Component: () => <SignIn />
    },
    {
        title: 'Sign Up',
        path: '/sign-up',
        // Component: () => <h1>SignUpForm</h1>
        Component: () => <SignUp />
      }
  ];
  