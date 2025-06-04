import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Building2" size={28} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Отель "Комфорт"</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#rooms"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Номера
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700">Забронировать</Button>
      </div>
    </header>
  );
};

export default Header;
