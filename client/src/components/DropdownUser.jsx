// import { Link } from "react-router-dom";
import { Typography, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ArrowLeftStartOnRectangleIcon, UserIcon } from "@heroicons/react/24/solid";
// import UserOne from "../images/user/user-01.png";

const DropdownUser = () => {
  return (
    <div className="relative ">
      <div className="flex items-center gap-4" to="#">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">Thomas Anree</span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <Menu>
          <MenuHandler>
            <span className="h-12 w-12 rounded-full">
              <img className="rounded-full w-13" src="https://i.pravatar.cc/150?img=12" alt="User" />
            </span>
          </MenuHandler>
          <MenuList className="w-max border-0">
            <MenuItem className="flex items-center gap-3">
              <UserIcon className="w-5" />
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1 font-normal">
                  <strong>My Profile</strong>
                </Typography>
              </div>
            </MenuItem>

            {/* Logout DropDown */}
            <MenuItem className="flex items-center gap-4">
              <ArrowLeftStartOnRectangleIcon className="w-5" />
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1 font-normal">
                  <strong>Logout</strong>
                </Typography>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default DropdownUser;
