import { Component, Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './src/pages/Authentication/SignIn'
import SignUp from './src/pages/Authentication/SignUp'
import Ecommerce from './src/pages/Dashboard/Ecommerce'
import routes from './src/routes'

const DefaultLayout = lazy(() => import('./src/layout/DefaultLayout'));

function App() {

  return (
    <>
    <Routes>
      <Route path='/auth/signin' element={<SignIn />} />
      <Route path='/auth/signup' element={<SignUp />} />
      <Route element={<DefaultLayout />}>
          <Route index element={<Ecommerce />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                    <Component />
                }
              />
            );
          })}
        </Route>
    </Routes>
    </>
  )
}

export default App
