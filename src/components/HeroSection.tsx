import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-healthcare-blue to-healthcare-blue-light text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Layanan Kesehatan
            <span className="block text-accent">Terpercaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Rumah Sakit Menur memberikan pelayanan kesehatan jiwa dan non-jiwa 
            dengan standar profesional dan fasilitas modern
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Layanan Darurat
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-healthcare-blue"
            >
              Informasi Lebih Lanjut
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Pelayanan Prima</h3>
            <p className="text-gray-300 text-sm">
              Layanan kesehatan berkualitas dengan tenaga medis profesional
            </p>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fasilitas Modern</h3>
            <p className="text-gray-300 text-sm">
              Peralatan medis terkini dan fasilitas yang memadai
            </p>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tim Ahli</h3>
            <p className="text-gray-300 text-sm">
              Dokter spesialis dan tenaga kesehatan berpengalaman
            </p>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Emergency</h3>
            <p className="text-gray-300 text-sm">
              Layanan gawat darurat tersedia 24 jam setiap hari
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;