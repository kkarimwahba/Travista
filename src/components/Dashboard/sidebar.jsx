import React, { useState } from "react";
import {
  Home,
  Package,
  FileText,
  Users,
  FormInput,
  Bell,
  Plane,
} from "lucide-react";
import { PiCity } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { ImNewspaper } from "react-icons/im";
import { BsQuestionOctagon } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";

function Sidebar({ setActiveSection }) {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "packages", icon: Package, label: "Packages" },
    { id: "blogs", icon: FileText, label: "Blogs" },
    { id: "articles", icon: GrArticle, label: "Articles" },
    { id: "employees", icon: Users, label: "Employees" },
    { id: "forms", icon: FormInput, label: "Forms" },
    { id: "Visa", icon: FaWpforms, label: "Visa" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "cities", icon: PiCity, label: "cities" },
    { id: "seasons", icon: Plane, label: "Seasons" },
    { id: "hotels", icon: LuHotel, label: "Hotels" },
    { id: "newsletter", icon: ImNewspaper, label: "Newsletters" },
    { id: "FaqsManagement", icon: BsQuestionOctagon, label: "FAQs Management" },
    { id: "SocialMedia", icon: IoShareSocialOutline, label: "Social Media" },
  ];

  const [activeSection, setActive] = useState("dashboard");

  const handleClick = (id) => {
    setActive(id);
    setActiveSection(id); // Pass the selected section to parent
  };

  return (
    <div className="bg-white h-screen shadow-lg w-64">
      <div className="border-b p-4">
        <div className="flex gap-2 items-center">
          <Plane className="h-8 text-blue-600 w-8" />
          <h1 className="text-2xl text-blue-600 font-bold">Travista</h1>
        </div>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex items-center w-full text-left gap-3 p-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
