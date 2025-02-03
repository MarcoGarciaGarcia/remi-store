import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Menu, X } from "lucide-react";

const MenuDashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar>
      <NavbarContent>
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-primary-500" />
          ) : (
            <Menu className="text-primary-500" />
          )}
        </Button>
      </NavbarContent>
      <div className={isMenuOpen ? "block bg-red-500 w-full" : "hidden"}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </Navbar>
  );
};

export default MenuDashboard;
