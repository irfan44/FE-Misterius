import { Button, Dropdown, Navbar } from "flowbite-react";
import { isLoggedIn } from "@/utils/checkLogin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { me } from "@/api/user";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

const Header = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const getUserProfile = async () => {
    const response = await me();
    setName(response.name);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, []);

  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            YukJahit
          </span>
        </Navbar.Brand>
        <div className="flex items-center space-x-4 md:order-2">
          {loggedIn ? (
            <div className="flex items-center space-x-4">
              <Button color="gray">Cart</Button>
              <Dropdown
                inline
                label={name && capitalizeFirstLetter(name)}
                color="light"
              >
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button onClick={() => router.push("/login")}>Login</Button>
              <Button onClick={() => router.push("/register")}>Register</Button>
            </div>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
