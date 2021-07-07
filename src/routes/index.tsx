import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NotFound from "../containers/NotFound";
import MainRoutes from "./main";

/**
 * 최상위 라우트
 */
interface IAppRoute {
  initComplete: boolean;
}
export default function AppRoute({ initComplete }: IAppRoute) {
  return (
    <BrowserRouter basename="main">
      <Switch>
        {initComplete && <Route path="/" component={MainRoutes} />}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
