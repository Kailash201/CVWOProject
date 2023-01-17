import React from "react";
import { Navigate } from 'react-router-dom'

type Props = {
    auth: boolean;
    children: any;
}


const Protected: React.FC<Props> = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected