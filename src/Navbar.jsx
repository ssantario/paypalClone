import React, { useState } from "react";
import paypalLogo from "./assets/PayPal.svg";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 lg:px-20 shadow-lg bg-white z-50">
      {/* Logo */}
      <a href="#hero" className="flex items-center">
        <img src={paypalLogo} alt="PayPal Logo" className="h-10" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12 text-lg font-semibold">
        <a
          href="#personal"
          className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600"
        >
          Personal
        </a>
        <a
          href="#business"
          className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600"
        >
          Business
        </a>
        <a
          href="#partner"
          className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600"
        >
          Partners
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-600 focus:outline-none hover:transform hover:scale-110 transition-transform duration-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-40">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-lg font-bold hover:text-blue-600">
              Personal
            </a>
            <a href="#" className="text-lg font-bold hover:text-blue-600">
              Business
            </a>
            <a href="#partner" className="text-lg font-bold hover:text-blue-600">
              Partners
            </a>
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col w-full px-6 space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full border border-blue-600 py-2 rounded-full text-blue-600 hover:bg-blue-100">
                  Sign Up
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign Up</DialogTitle>
                  <DialogDescription>
                    Create your PayPal account by filling in the details below.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <DialogFooter>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Sign Up
                    </button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
                  Login
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>
                    Enter your credentials to access your PayPal account.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <DialogFooter>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Login
                    </button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <button className="border border-blue-600 py-2 px-4 rounded-full text-blue-600 hover:bg-blue-100 ease-in-out duration-300 transform hover:scale-110 hover:cursor-pointer">
              Sign Up
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign Up</DialogTitle>
              <DialogDescription>
                Create your PayPal account by filling in the details below.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2"
              />
              <DialogFooter>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-white py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 transform hover:scale-110 hover:cursor-pointer">
              Login
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Enter your credentials to access your PayPal account.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2"
              />
              <DialogFooter>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 "
                >
                  Login
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Navbar;