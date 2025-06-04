import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Wifi",
      title: "Бесплатный Wi-Fi",
      description:
        "Высокоскоростной интернет во всех номерах и общественных зонах",
    },
    {
      icon: "Car",
      title: "Парковка",
      description: "Бесплатная охраняемая парковка для гостей отеля",
    },
    {
      icon: "Coffee",
      title: "Завтрак",
      description: "Континентальный завтрак с 7:00 до 10:00",
    },
    {
      icon: "Dumbbell",
      title: "Фитнес-зал",
      description: "Современный тренажерный зал работает круглосуточно",
    },
    {
      icon: "Concierge",
      title: "Консьерж-сервис",
      description: "Помощь в организации экскурсий и бронировании билетов",
    },
    {
      icon: "ShieldCheck",
      title: "Безопасность",
      description: "Видеонаблюдение и круглосуточная охрана",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Услуги и удобства
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о вашем комфорте и предлагаем широкий спектр услуг
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
