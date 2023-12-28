// import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { TabsDefault } from "../../components/Tabs";
import DialogDefault from "../../components/DialogModal";

const Profile = () => {
  return (
    <>
      <Card className="w-full shadow-lg">
        <CardHeader floated={false}>
          <div className="flex justify-center">
            <img className="w-38 rounded-full my-5 ml-2" src="https://i.pravatar.cc/150?img=12" alt="ui/ux review check" />

            <Typography className="flex my-auto">
              <div className="ml-16">
                <Typography color="black" variant="h6" className="mb-2">
                  Rifqi Ammar Ramadhan
                </Typography>
                <Typography color="blue-gray" className="mt-3" style={{ fontSize: "0.9rem" }}>
                  Gold Member
                  <p>Travel Owner</p>
                </Typography>
              </div>

              <div className=" mt-9">
                <Typography color="blue-gray" variant="small">
                  <p>rifqiammarramadhan@gmail.com</p>
                  <p className="my-1">
                    082217127987 (<span className="font-semibold">active</span>)
                  </p>
                </Typography>
              </div>

              {/* Modal Button */}
              <DialogDefault buttonName={"edit"} buttonStye={"ml-36 mt-20 h-10"} />
              {/* Modal Button */}
            </Typography>
          </div>
        </CardHeader>
        <CardBody>
          {/* Body */}
          <TabsDefault />
          {/* End Body */}
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Profile;
