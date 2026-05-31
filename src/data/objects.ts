export type ObjectType = 'house' | 'gazebo' | 'cottage';

export interface ResortObject {
  id: number;
  slug: string;
  type: ObjectType;
  name: string;
  capacity: number;
  price: number;
  priceUnit: string;
  area: number;
  description: string;
  shortDesc: string;
  amenities: string[];
  available: boolean;
  featured: boolean;
  color: string;
}

export const resortObjects: ResortObject[] = [
  {
    id: 1,
    slug: 'dom-sosnovyi',
    type: 'house',
    name: 'Дом «Сосновый»',
    capacity: 8,
    price: 6500,
    priceUnit: 'сутки',
    area: 80,
    shortDesc: 'Просторный деревянный дом с верандой и видом на лес',
    description: 'Большой уютный дом из сруба на 8 человек. Просторная гостиная, 3 спальни, полностью оборудованная кухня, баня на дровах. Отдельная беседка с мангалом на участке.',
    amenities: ['Баня', 'Мангал', 'Веранда', 'WiFi', 'ТВ', 'Холодильник', 'Стиральная машина', 'Парковка'],
    available: true,
    featured: true,
    color: 'linear-gradient(135deg, hsl(150 35% 18%) 0%, hsl(150 28% 30%) 100%)',
  },
  {
    id: 2,
    slug: 'dom-ozernyi',
    type: 'house',
    name: 'Дом «Озёрный»',
    capacity: 6,
    price: 4800,
    priceUnit: 'сутки',
    area: 60,
    shortDesc: 'Уютный дом у кромки леса с панорамными окнами',
    description: 'Современный дом в скандинавском стиле на 6 человек. Панорамные окна с видом на лес, 2 спальни, большая кухня-гостиная, открытая терраса.',
    amenities: ['Терраса', 'Мангал', 'WiFi', 'ТВ', 'Кухня', 'Парковка'],
    available: true,
    featured: true,
    color: 'linear-gradient(135deg, hsl(210 48% 22%) 0%, hsl(210 38% 35%) 100%)',
  },
  {
    id: 3,
    slug: 'dom-lesnoi',
    type: 'house',
    name: 'Дом «Лесной»',
    capacity: 4,
    price: 3200,
    priceUnit: 'сутки',
    area: 45,
    shortDesc: 'Компактный дом для небольшой семьи или пары',
    description: 'Уютный дом для 4 человек в окружении сосен. 2 спальни, кухня, санузел, уличная зона с мангалом. Идеально для семьи с детьми.',
    amenities: ['Мангал', 'WiFi', 'Кухня', 'Парковка', 'Детская площадка рядом'],
    available: false,
    featured: false,
    color: 'linear-gradient(135deg, hsl(30 28% 42%) 0%, hsl(38 30% 52%) 100%)',
  },
  {
    id: 4,
    slug: 'dom-severnyi',
    type: 'cottage',
    name: 'Коттедж «Северный»',
    capacity: 12,
    price: 9500,
    priceUnit: 'сутки',
    area: 120,
    shortDesc: 'Большой коттедж для корпоратива или большой компании',
    description: 'Вместительный коттедж на 12 человек с отдельной банной зоной. 4 спальни, большой общий зал, профессиональная кухня, 2 санузла, просторная терраса.',
    amenities: ['Баня', 'Мангал', 'Терраса', 'WiFi', 'ТВ', 'Профкухня', 'Парковка', 'Беседка'],
    available: true,
    featured: true,
    color: 'linear-gradient(135deg, hsl(150 28% 26%) 0%, hsl(210 38% 28%) 100%)',
  },
  {
    id: 5,
    slug: 'besedka-bolshaya',
    type: 'gazebo',
    name: 'Беседка «Лесная»',
    capacity: 20,
    price: 2500,
    priceUnit: 'сутки',
    area: 35,
    shortDesc: 'Большая крытая беседка для праздников и пикников',
    description: 'Просторная крытая беседка в лесу на 20 человек. Оснащена мангалом, столами и лавками, освещением. Рядом место для парковки. Отлично подходит для дней рождения и корпоративов.',
    amenities: ['Мангал', 'Освещение', 'Столы и лавки', 'Парковка'],
    available: true,
    featured: false,
    color: 'linear-gradient(135deg, hsl(38 30% 62%) 0%, hsl(30 28% 42%) 100%)',
  },
  {
    id: 6,
    slug: 'besedka-ozernaya',
    type: 'gazebo',
    name: 'Беседка «Озёрная»',
    capacity: 10,
    price: 1500,
    priceUnit: 'сутки',
    area: 20,
    shortDesc: 'Романтичная беседка у воды с видом на озеро',
    description: 'Небольшая уютная беседка у кромки озера. Идеально для романтического ужина или небольшой компании. Мангал, деревянные столы, освещение.',
    amenities: ['Мангал', 'Освещение', 'Вид на озеро'],
    available: true,
    featured: false,
    color: 'linear-gradient(135deg, hsl(210 48% 28%) 0%, hsl(150 35% 22%) 100%)',
  },
];

export const typeLabels: Record<ObjectType, string> = {
  house: 'Дом',
  gazebo: 'Беседка',
  cottage: 'Коттедж',
};
