import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import hospitalLogo from "@/assets/icons/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Profil",
      href: "#",
      submenu: [
        { label: "Profil RS", href: "/Profile" },
        { label: "Visi & Misi", href: "/visi-misi" },
      ],
    },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-healthcare-blue text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>WA Informasi / Pengaduan (+62)81136333120 (chat only)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Alamat: Jl. Raya Menur No. 120</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={hospitalLogo} alt="Hospital Logo" className="h-12 w-12 rounded-full" />
              <div className="px-2 text-gray-400 text-2xl"> | </div>
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <a href={item.href} className="flex items-center gap-1 text-gray-700 hover:text-healthcare-blue transition-colors duration-200 font-medium">
                      {item.label}
                      {item.submenu && (
                        <svg className="w-4 h-4 mt-0.5 text-gray-500 group-hover:text-healthcare-blue transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      )}
                    </a>

                    {/* Dropdown submenu */}
                    {item.submenu && (
                      <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                        {item.submenu.map((subitem, subindex) => (
                          <a key={subindex} href={subitem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-healthcare-blue">
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center">
              <div className="text-right flex-row flex items-center px-2">
                <Phone className="h-4 w-4" />
                <p className="text-healthcare-blue font-bold text-lg p-2">(+62)81136333120</p>
                <p className="text-lg healthcare-blue ">(chat only)</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <a key={index} href={item.href} className="text-gray-700 hover:text-healthcare-blue transition-colors duration-200 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-healthcare-blue font-bold">(+62)81136333120 (chat only)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
