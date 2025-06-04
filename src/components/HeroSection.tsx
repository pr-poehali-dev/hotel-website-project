import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)",
        }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Добро пожаловать в отель "Комфорт"
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Уютное размещение в самом центре города с превосходным сервисом
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать номер
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-gray-800 text-lg px-8 py-3"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-sm opacity-80">
          <div className="flex items-center">
            <Icon name="Star" size={16} className="text-yellow-400 mr-1" />
            <span>3 звезды</span>
          </div>
          <div className="flex items-center">
            <Icon name="MapPin" size={16} className="mr-1" />
            <span>Центр города</span>
          </div>
          <div className="flex items-center">
            <Icon name="Wifi" size={16} className="mr-1" />
            <span>Бесплатный Wi-Fi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
