import { Phone, Mail, MapPin, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import hospitalLogo from "@/assets/hospital-logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hospital Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={hospitalLogo} 
                alt="Hospital Logo" 
                className="h-16 w-16 rounded-full"
              />
              <h2 className="text-2xl font-bold">Rumah Sakit Menur</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Rumah Sakit Menur dapat memberikan layanan kesehatan jiwa dan non-jiwa yang didukung 
              oleh sarana dan prasarana yang baik dan memadai serta tenaga kesehatan spesialis yang 
              handal dan profesional
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <div className="flex space-x-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <span className="text-white font-bold">f</span>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <span className="text-white font-bold">@</span>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <span className="text-white font-bold">▶</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Hubungi kami</h3>
            <p className="text-gray-300 mb-6">
              Jika ada pertanyaan dan kebutuhan informasi silahkan hubungi kami
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">031 502 1635 (Call Center)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Ambulance className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">031 502 3952 (IGD)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">08113633120 (WA Informasi & Pengaduan)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">rsjmenur@jatimprov.go.id</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Jl. Raya Menur No. 120, Surabaya.</p>
                </div>
              </div>
            </div>

            <Button 
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©2023 Instalasi IT dan SIMRS
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;