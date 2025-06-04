import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Стандартный номер",
      price: "3,500",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Односпальная кровать", "Ванная комната", "Wi-Fi", "ТВ"],
      popular: false,
    },
    {
      id: 2,
      name: "Комфорт номер",
      price: "4,800",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Двуспальная кровать", "Кондиционер", "Мини-бар", "Сейф"],
      popular: true,
    },
    {
      id: 3,
      name: "Люкс номер",
      price: "7,200",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Гостиная зона", "Джакузи", "Балкон", "Халаты"],
      popular: false,
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши номера</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите идеальный номер для вашего комфортного отдыха
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {room.popular && (
                <div className="relative">
                  <Badge className="absolute top-4 left-4 z-10 bg-blue-600">
                    Популярный
                  </Badge>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  {room.name}
                </CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    {room.price} ₽
                  </span>
                  <span className="text-gray-500">за ночь</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
