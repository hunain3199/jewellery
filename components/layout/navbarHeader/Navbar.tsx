import CartModal from 'components/cart/modal';
import { Button } from "components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "components/ui/hover-card";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../app/public/assets/logo2.png";
import Search from "../../widgets/SearchBar";

interface ICategory {
  id: number;
  name: string;
  link: string;
}

interface IPage {
  id: number;
  name: string;
  link: string;
}

const categoryItems: ICategory[] = [
  {
    id: 1,
    name: "Men",
    link: "/men",
  },
  {
    id: 2,
    name: "Women",
    link: "/women",
  },
  {
    id: 3,
    name: "Kids",
    link: "/kids",
  },
];

const pageItems: IPage[] = [
  {
    id: 1,
    name: "Collections",
    link: "/collections",
  },
  {
    id: 2,
    name: "New",
    link: "/New",
  },
  {
    id: 3,
    name: "Inspration",
    link: "/inspration",
  },
  {
    id: 4,
    name: "Brands",
    link: "/brands",
  },
  {
    id: 5,
    name: "Lookbook",
    link: "/lookbook",
  },
  {
    id: 6,
    name: "Accessory",
    link: "/accessory",
  },
  {
    id: 7,
    name: "Deals",
    link: "/deals",
  },
  {
    id: 8,
    name: "Outlet",
    link: "/outlet",
  },
];

const Navbar = () => {
  return (
    <div className="hidden lg:flex flex-col   py-0 my-3 text-thin">
      {/* navigation header */}
      <div className="grid grid-cols-4 w-full px-2">
        {/* logo */}
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={200}
            className="dark:text-white"
          />
        </div>
        {/* SearchBar */}
        <div className="col-span-2">
          {/* <SearchBar /> */}

          <Search />
        </div>

        <div className="flex pl-10  flex-wrap w-full justify-evenly items-center">
          <div className=" p-2 border rounded-full">
            <Heart className={`text-primary-theme`} />
          </div>

          {/* Account */}
          <div>
            <HoverCard>
              <HoverCardTrigger className={`flex flex-wrap gap-2 text-base li`}>
                Account <User />
              </HoverCardTrigger>
              <HoverCardContent className={`w-[300px] h-fit`}>
                <div className="space-y-4">
                  <Button className="w-full space-x-4 py-6">Login</Button>
                  <ul className="leading-8 text-wrap tracking-tight font-light">
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Your account{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Order Tracking{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Support{" "}
                      </Link>
                    </li>

                    <hr className="w-full h-1 mt-10" />
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-none border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger className={`flex flex-wrap gap-2 text-base li`}>
                <CartModal />
              </HoverCardTrigger>
              {/* <HoverCardContent className={``}>
                <div className="space-y-4">
                  <h1 className="text-foreground font-semibold text-base">
                    YOUR BAG IS EMPTY
                  </h1>
                  <p className="font-normal text-sm">
                    Stock your bag with all of your stylish items and needs.
                  </p>

                  <Button className="w-full space-x-4 py-6">Login</Button>
                </div>
              </HoverCardContent> */}
            </HoverCard>
          </div>
        </div>
      </div>
      {/* navigation bar */}
      <div className="flex items-center pt-5 gap-24 line-clamp-1 px-2">
        <div className="">
          {categoryItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="duration-300 hover:border-b-[1px] border-primary-theme py-2 mx-3 font-semibold hover:text-primary-theme/100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="space-x-12 text-muted-foreground">|</div>

        <div className="lg:ml-24 flex justify-evenly items-center p-0">
          {pageItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="duration-300 hover:border-b-[1px] border-primary-theme py-2 lg:mx-5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
