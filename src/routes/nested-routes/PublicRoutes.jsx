import React from 'react'
import useAuthContext from '../../hooks/useAuthContext'
import { Navigate } from 'react-router-dom';
import { PATHS } from '../paths';
import { Outlet } from 'react-router-dom';

const PublicRoutes = () => {

  const { isAuth } = useAuthContext();


  if (isAuth) {
    return <Navigate to={PATHS.privates} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicRoutes
