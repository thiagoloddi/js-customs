import React from 'react';
import styled from 'styled-components';
import SideMenu from './SideMenu';
import { Route } from "react-router-dom";


const PrivateContainer = styled.div`

`; 

const PrivateRoute = ({ path, component: Component }) => {

  return (
    <Route path={path} component={() => {
      return (
        <PrivateContainer>
          <Component />
        </PrivateContainer>
      );
    }} />
  );
}

export default PrivateRoute;