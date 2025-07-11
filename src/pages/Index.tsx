import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Элегантная черная футболка",
      price: 2990,
      originalPrice: 3990,
      brand: "FASHION",
      color: "Черный",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: "/img/30b90604-3fec-4f6b-a329-ecd34c587fe6.jpg",
      sale: true,
    },
    {
      id: 2,
      name: "Стильные белые кроссовки",
      price: 8990,
      brand: "SPORT",
      color: "Белый",
      sizes: ["36", "37", "38", "39", "40", "41", "42"],
      image: "/img/85c6a0fb-034f-4ac8-881b-a35e8f9f9217.jpg",
      sale: false,
    },
    {
      id: 3,
      name: "Черное вечернее платье",
      price: 12990,
      brand: "ELEGANCE",
      color: "Черный",
      sizes: ["XS", "S", "M", "L"],
      image: "/img/136055d3-0a23-4fa4-b58c-27db909d1144.jpg",
      sale: false,
    },
  ];

  const colors = ["Черный", "Белый", "Серый", "Синий"];
  const brands = ["FASHION", "SPORT", "ELEGANCE", "CASUAL"];
  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ];

  const addToCart = (productId: number) => {
    setCartItems(cartItems + 1);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedColor || product.color === selectedColor) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedSize || product.sizes.includes(selectedSize))
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold tracking-tight">
                FASHION STORE
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Корзина
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={16} />
                {cartItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Новая коллекция
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Современный стиль для городской жизни
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Фильтры</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Размер
                  </label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">Все размеры</SelectItem>
                      {sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Цвет</label>
                  <Select
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите цвет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">Все цвета</SelectItem>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Бренд
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">Все бренды</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">
                Каталог товаров
                <span className="text-sm text-gray-500 ml-2">
                  ({filteredProducts.length} товаров)
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.sale && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          SALE
                        </Badge>
                      )}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {product.brand}
                    </Badge>
                    <CardTitle className="text-lg mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="mb-3">
                      Цвет: {product.color} • Размеры:{" "}
                      {product.sizes.join(", ")}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">
                          {product.price.toLocaleString()} ₽
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(product.id)}
                        className="bg-black text-white hover:bg-gray-800"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />В
                        корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">FASHION STORE</h4>
              <p className="text-gray-600 text-sm">
                Современная одежда для стильных людей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Размерная сетка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <p className="text-sm text-gray-600">support@fashionstore.ru</p>
              <p className="text-sm text-gray-600">+7 (495) 123-45-67</p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-gray-600">
            © 2024 Fashion Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
