import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon, HomeIcon, UserCircleIcon, Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";

export function DefaultSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Hotel Realta
        </Typography>
      </div>
      <List>
        <Typography variant="small" color="blue-gray" className="mt-3 mb-1 font-black opacity-75">
          Home
        </Typography>
        <ListItem className="mt-1">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <Typography variant="small" color="blue-gray" className="mt-4 mb-1 font-black opacity-75">
          Pages
        </Typography>

        {/* User Bar Page Start */}
        <Accordion open={open === 2} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}>
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Users
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <NavLink to="/users/profile">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  My Profile
                </ListItem>
              </NavLink>

              <NavLink to="/users/mybooking">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  My Booking
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
        {/* End Users Bar Page */}

        {/* Setting Bar Page */}
        <Typography variant="small" color="blue-gray" className="mt-6 mb-1 font-black  opacity-75">
          Setting
        </Typography>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

export default DefaultSidebar;
