import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton, Breadcrumbs } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import capitalizeFirst from "../helpers/capitalizeFirst";
import DropdownUser from "./DropdownUser";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography as="li" variant="large" color="blue-gray" className="p-1 font-small">
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography> */}
      <Typography as="li" variant="large" color="blue-gray" className="p-1 font-medium">
        <DropdownUser />
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl h-20 px-6 py-3 mt-3  bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5 ">
          <Breadcrumbs className="bg-transparent p-0 transition-all mt-1">
            <NavLink>
              <Typography variant="small" color="blue-gray" className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                {capitalizeFirst(layout)}
              </Typography>
            </NavLink>

            <Typography variant="small" color="blue-gray" className="font-normal">
              {capitalizeFirst(page)}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray" className="mt-1">
            {capitalizeFirst(page)}
          </Typography>
          {/* Material Tailwind */}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
