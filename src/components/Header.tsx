import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import hospitalLogo from "@/assets/hospital-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Profil", href: "#" },
    { label: "Layanan", href: "#" },
    { label: "SAKIP", href: "#" },
    { label: "Zona Integritas", href: "#" },
    { label: "PPID", href: "#" },
    { label: "Diklatlit", href: "#" },
    { label: "Pojok Menur", href: "#" },
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
              <img 
                src={hospitalLogo} 
                alt="Hospital Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold text-healthcare-blue">
                  Rumah Sakit Menur
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-healthcare-blue transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center">
              <div className="text-right">
                <p className="text-healthcare-blue font-bold text-lg">
                  (+62)81136333120
                </p>
                <p className="text-sm text-gray-600">(chat only)</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-healthcare-blue transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-healthcare-blue font-bold">
                    (+62)81136333120 (chat only)
                  </p>
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