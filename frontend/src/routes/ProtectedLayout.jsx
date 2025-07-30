import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedLayout = () => {
  const location = useLocation();

  const {isAuthenticated} = useSelector((state) => state.auth);

  if(!isAuthenticated) {
    return <Navigate to="/login" replace={true} state={{from: location}} />;
  }

  return (
    <Outlet />
  )
}

export default ProtectedLayout;
