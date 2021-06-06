import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NotFound from "../containers/NotFound";
import MainRoutes from "./main";

/**
 * 최상위 라우트
 */
export default function AppRoute() {
  return (
    <BrowserRouter basename="/main">
      <Switch>
        <Route path="/" component={MainRoutes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
