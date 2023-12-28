// import { lazy } from "react";
// const Profile = lazy(() => import("../pages/Users/Profile"));
// const UserBooking = lazy(() => import("../pages/Users/UserBooking"));
import { Profile, UserBooking } from "../pages/Users";

const coreRoutes = [
  {
    path: "profile",
    title: "My Profile",
    component: Profile,
  },
  {
    path: "mybooking",
    title: "My Booking",
    component: UserBooking,
  },
];

const userRoutes = [...coreRoutes];
export default userRoutes;
