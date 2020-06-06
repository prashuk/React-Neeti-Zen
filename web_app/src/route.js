import React from 'react';

// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin = React.lazy(() => import('./Demo/Authentication/SignIn/Signin'));

const route = [
    // { path: '/signup', exact: true, name: 'Signup', component: SignUp1 },
    { path: '/signin', exact: true, name: 'Signin', component: Signin }
];

export default route;