import Image from "next/image";
import Button from "../ui/button";
import {Shipment} from "images/index";
import Link from "next/link";

const suppliers = Array.from({length: 20}, (_, i) => ({
  id: i + 1,
  name: `Supplier ${i + 1}`,
  description: `Description for Supplier ${i + 1}`,
}));

const topSuppliers = Array.from({length: 4}, (_, i) => ({
  id: i + 1,
  name: `Top Supplier ${i + 1}`,
  description: `Description for Top Supplier ${i + 1}`,
}));

interface menuItem {
  name: string;
  link: string;
}

interface footerMenuGroupType {
  groupTitle: string;
  subMenu: Array<menuItem>;
}

export const footerMenu: Array<footerMenuGroupType> = [
  {
    groupTitle: "Company",
    subMenu: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
      {
        name: "News",
        link: "",
      },
      {
        name: "Media kit",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
    ],
  },
  {
    groupTitle: "Resources",
    subMenu: [
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Newsletter",
        link: "",
      },
      {
        name: "Events",
        link: "",
      },
      {
        name: "Help centre",
        link: "",
      },
      {
        name: "Tutorials",
        link: "",
      },
      {
        name: "Support",
        link: "",
      },
    ],
  },
  {
    groupTitle: "Social",
    subMenu: [
      {
        name: "Twitter",
        link: "",
      },
      {
        name: "LinedIn",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
    ],
  },
  {
    groupTitle: "Legal",
    subMenu: [
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Privacy",
        link: "",
      },
      {
        name: "Cookies",
        link: "",
      },
      {
        name: "Licenses",
        link: "",
      },
      {
        name: "Settings",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
    ],
  },
];

export const Header = () => (
  <header className=" p-4 bg-primary text-white shadow-[1px_1px_4px_rgba(80,114,125,.4)]">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-xl font-bold"> Logo</div>
      <nav className="flex gap-8">
        <Button className="text-white border-white" variant={"outlined"}>
          Sign In
        </Button>
        <Button className="text-white border-white" variant={"outlined"}>
          Sign Up
        </Button>
        <Button className="btn-supply bg-white text-primary">Supply</Button>
      </nav>
    </div>
  </header>
);

// Hero Section
export const Hero = () => (
  <section className="hero bg-[#052546] py-24 text-center">
    <h1 className="text-4xl font-bold mb-8 text-white font-space ">
      Find the Best Suppliers
    </h1>
    <div className="search-bar relative mx-auto w-1/2">
      <input
        type="text"
        className="w-full p-4 rounded-md border border-gray-300"
        placeholder="Search for suppliers..."
      />
    </div>
  </section>
);

// Supplier Card
export const SupplierCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="supplier-card bg-white shadow-md rounded overflow-hidden hover:scale-105 transition-transform duration-200">
    <Image
      src={Shipment}
      height={170}
      width={250}
      alt="supplier"
      className="w-full object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Top Suppliers Section
export const TopSuppliers = () => (
  <section className="max-w-6xl mx-auto py-8">
    <h2 className="text-2xl font-bold mb-6">Top Suppliers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topSuppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          name={supplier.name}
          description={supplier.description}
        />
      ))}
    </div>
  </section>
);

// Supplier List Section
export const SupplierList = () => (
  <section className="max-w-6xl mx-auto py-8">
    <h2 className="text-2xl font-bold mb-6">Suppliers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {suppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          name={supplier.name}
          description={supplier.description}
        />
      ))}
    </div>
  </section>
);

// Footer Component
export const Footer = () => (
  <footer className=" bg-primary">
    <div className="mx-auto w-screen max-w-screen-2xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link
            href="/"
            className="flex items-center text-white font-bold text-3xl"
          >
            Logo
          </Link>
          <p className="text-white text-sm my-4">Your desired marketplace</p>
        </div>
        <div className="flex items-start justify-between flex-wrap lg:min-w-[60%] pr-[5rem]">
          {footerMenu.map((menu, key) => (
            <div key={key} className="w-1/2 lg:w-auto p-4 lg:p-0">
              <h2 className="mb-6 text-[14px] font-semibold  uppercase text-white ">
                {menu.groupTitle}
              </h2>
              {menu.subMenu.map((menu, key) => (
                <ul key={key} className=" text-gray-400 font-medium">
                  <li className="mb-4 font-[500] text-white text-[16px]">
                    <Link href="/" className="hover:underline">
                      {menu.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Doxxa
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <Link href="#" className="text-gray-500  hover:text-white">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link href="#" className="text-gray-500  hover:text-white ms-5">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </Link>
          <Link href="#" className="text-gray-500  hover:text-white ms-5">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
