// import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { SignUp, SignIn, GuestSignUp } from "./pages/Auth";
import { userRoutes } from "./routes";
// const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/">
          <Route path="signin" element={<SignIn />} />
          <Route path="guestsignup" element={<GuestSignUp />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Users */}
        <Route path="/users/" element={<DefaultLayout />}>
          {/* <Route index element={<ECommerce />} /> */}
          {userRoutes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  // <Suspense fallback={<Loader />}>
                  // <Component />
                  // </Suspense>
                  <Component />
                }
              />
            );
          })}
        </Route>

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
