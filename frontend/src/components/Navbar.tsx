// src/components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Link } from "react-router-dom"; // Or use `Next.js` Link if in Next.js

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">MyBrand</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">
          Services
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" onClick={toggleDrawer}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={toggleDrawer}>
        <DrawerTrigger />
        <DrawerContent side="left" className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">Menu</div>
            <Button variant="ghost" onClick={toggleDrawer}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={toggleDrawer}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={toggleDrawer}>
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={toggleDrawer}>
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={toggleDrawer}>
              Contact
            </Link>
          </nav>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;