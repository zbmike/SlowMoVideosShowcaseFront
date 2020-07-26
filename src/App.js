import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Splash from "./splash/pages/Splash";
// import Parties from "./parties/pages/Parties";
// import PartyVideos from "./videos/pages/PartyVideos";
// import NewParty from "./parties/pages/NewParty";
// import NewVideo from "./videos/pages/NewVideo";
// import Auth from "./users/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const Parties = React.lazy(() => import("./parties/pages/Parties"));
const PartyVideos = React.lazy(() => import("./videos/pages/PartyVideos"));
const NewParty = React.lazy(() => import("./parties/pages/NewParty"));
const NewVideo = React.lazy(() => import("./videos/pages/NewVideo"));
const Auth = React.lazy(() => import("./users/pages/Auth"));

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/:userId/parties" exact>
          <Parties />
        </Route>
        <Route path="/parties/new" exact>
          <NewParty />
        </Route>
        <Route path="/:partyId/videos" exact>
          <PartyVideos />
        </Route>
        <Route path="/:partyId/videos/new" exact>
          <NewVideo />
        </Route>
        <Redirect to={`/${userId}/parties`} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Splash />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
