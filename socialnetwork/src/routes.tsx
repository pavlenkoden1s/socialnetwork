import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { SignIn } from './containers/signinContainer';
import { SignUp } from './containers/signupContainer';
import { AddPost }  from './containers/addPostContainer';
import { Feed } from './containers/feedContainer';

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
        Component: () => <SignUp />
      },
      {
        title: 'Add post',
        path: '/add-post',
        Component: () => <AddPost />
      },
    //   {
    //     title: 'Feed',
    //     path: '/feed',
    //     Component: Feed
    //   }
  ];
  