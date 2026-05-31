import { useParams, Link } from 'react-router-dom';
import { resortObjects, typeLabels } from '@/data/objects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const amenityIcons: Record<string, string> = {
  'Баня': 'Flame',
  'Мангал': 'Flame',
  'Веранда': 'Home',
  'WiFi': 'Wifi',
  'ТВ': 'Tv',
  'Холодильник': 'Refrigerator',
  'Стиральная машина': 'WashingMachine',
  'Парковка': 'Car',
  'Терраса': 'Sunset',
  'Кухня': 'ChefHat',
  'Профкухня': 'ChefHat',
  'Беседка': 'Tent',
  'Детская площадка рядом': 'Baby',
  'Освещение': 'Lightbulb',
  'Столы и лавки': 'Armchair',
  'Вид на озеро': 'Waves',
};

export default function ObjectPage() {
  const { slug } = useParams();
  const obj = resortObjects.find((o) => o.slug === slug);
  const [activePhoto, setActivePhoto] = useState(0);

  if (!obj) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-pine text-4xl mb-4">Объект не найден</h1>
            <Link to="/catalog" className="text-pine/60 font-body hover:text-pine">← Вернуться в каталог</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const photos = [0, 1, 2, 3];

  const photoColors = [
    obj.color,
    'linear-gradient(135deg, hsl(150 28% 30%) 0%, hsl(210 38% 32%) 100%)',
    'linear-gradient(135deg, hsl(30 28% 42%) 0%, hsl(38 25% 55%) 100%)',
    'linear-gradient(135deg, hsl(210 48% 22%) 0%, hsl(150 35% 22%) 100%)',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-20">
        {/* Breadcrumb */}
        <div className="bg-pine/95 border-b border-white/10">
          <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-xs font-body text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={12} />
            <Link to="/catalog" className="hover:text-white/70 transition-colors">Каталог</Link>
            <Icon name="ChevronRight" size={12} />
            <span className="text-white/70">{obj.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-16">
            {/* Left */}
            <div>
              {/* Photo slider */}
              <div className="relative rounded-sm overflow-hidden mb-3" style={{ height: 460 }}>
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ background: photoColors[activePhoto] }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/15 text-sm font-body tracking-widest">фото {activePhoto + 1}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="glass-dark text-white text-xs font-body px-3 py-1.5">
                    {typeLabels[obj.type]}
                  </span>
                  {obj.featured && (
                    <span className="bg-sand text-pine text-xs font-body px-3 py-1.5">
                      Популярный
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {photos.map((i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`relative rounded-sm overflow-hidden transition-all duration-200 ${
                      activePhoto === i ? 'ring-2 ring-pine' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ height: 70 }}
                  >
                    <div className="absolute inset-0" style={{ background: photoColors[i] }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-[10px] font-body">фото</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="mt-10">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-px bg-pine/30" />
                  <span className="text-pine/50 text-xs uppercase tracking-[0.2em] font-body">Описание</span>
                </div>
                <h1 className="font-display text-pine text-3xl xl:text-4xl font-semibold mb-5">{obj.name}</h1>
                <p className="text-pine/65 font-body font-light text-base leading-relaxed mb-8">
                  {obj.description}
                </p>

                {/* Key facts */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-white border border-stone/50 p-4 text-center">
                    <Icon name="Users" size={20} className="text-pine/50 mx-auto mb-2" />
                    <div className="font-display text-pine text-xl font-semibold">{obj.capacity}</div>
                    <div className="text-pine/45 text-xs font-body uppercase tracking-wider mt-0.5">гостей</div>
                  </div>
                  <div className="bg-white border border-stone/50 p-4 text-center">
                    <Icon name="Maximize2" size={20} className="text-pine/50 mx-auto mb-2" />
                    <div className="font-display text-pine text-xl font-semibold">{obj.area}</div>
                    <div className="text-pine/45 text-xs font-body uppercase tracking-wider mt-0.5">м²</div>
                  </div>
                  <div className="bg-white border border-stone/50 p-4 text-center">
                    <Icon name="Home" size={20} className="text-pine/50 mx-auto mb-2" />
                    <div className="font-display text-pine text-xl font-semibold">{typeLabels[obj.type]}</div>
                    <div className="text-pine/45 text-xs font-body uppercase tracking-wider mt-0.5">тип</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-10">
                  <h3 className="font-display text-pine text-xl font-semibold mb-5">Удобства</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {obj.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-3 bg-white border border-stone/40 px-4 py-3">
                        <Icon name={amenityIcons[a] || 'Check'} size={15} className="text-pine/50 shrink-0" />
                        <span className="text-pine/75 text-sm font-body font-light">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rules */}
                <div>
                  <h3 className="font-display text-pine text-xl font-semibold mb-5">Правила проживания</h3>
                  <div className="space-y-3">
                    {[
                      { icon: 'Clock', text: 'Заезд с 14:00, выезд до 12:00. Ранний заезд по согласованию.' },
                      { icon: 'Users', text: 'Количество гостей не должно превышать вместимость объекта.' },
                      { icon: 'Music', text: 'Тихие часы с 23:00 до 8:00. Уважайте соседей.' },
                      { icon: 'Dog', text: 'Домашние животные — по предварительному согласованию.' },
                      { icon: 'Flame', text: 'Разведение костров только в специально отведённых местах.' },
                    ].map((r) => (
                      <div key={r.text} className="flex items-start gap-3 py-3 border-b border-stone/30">
                        <Icon name={r.icon} size={15} className="text-pine/40 mt-0.5 shrink-0" />
                        <span className="text-pine/65 text-sm font-body font-light leading-relaxed">{r.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — sticky booking card */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="bg-white border border-stone/50 shadow-sm overflow-hidden">
                  <div className="bg-pine p-5">
                    <div className="font-display text-white text-3xl font-semibold">
                      {obj.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-white/50 text-sm font-body mt-0.5">за сутки</div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Заезд</label>
                      <input
                        type="date"
                        className="w-full border border-stone/60 bg-cream text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Выезд</label>
                      <input
                        type="date"
                        className="w-full border border-stone/60 bg-cream text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="bg-cream p-4 space-y-2">
                      <div className="flex justify-between text-sm font-body text-pine/60">
                        <span>Депозит (30%)</span>
                        <span>{Math.round(obj.price * 0.3).toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <div className="flex justify-between text-sm font-body text-pine/60">
                        <span>Минимум</span>
                        <span>1 сутки</span>
                      </div>
                    </div>

                    <Link
                      to={`/booking?object=${obj.id}`}
                      className="block w-full bg-pine text-white text-center py-4 font-body text-sm uppercase tracking-widest hover:bg-pine-mid transition-colors duration-200"
                    >
                      Забронировать
                    </Link>

                    <div className="flex items-center justify-center gap-2 py-3 border-t border-stone/40">
                      <Icon name="Phone" size={14} className="text-pine/40" />
                      <a href="tel:+79000000000" className="text-pine/60 font-body text-sm hover:text-pine transition-colors">
                        +7 (900) 000-00-00
                      </a>
                    </div>
                  </div>
                </div>

                {/* Availability badge */}
                <div className={`mt-3 flex items-center gap-2 justify-center py-3 text-sm font-body ${
                  obj.available
                    ? 'bg-pine/8 text-pine'
                    : 'bg-stone/50 text-pine/50'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${obj.available ? 'bg-pine animate-pulse' : 'bg-stone-mid'}`} />
                  {obj.available ? 'Доступно для бронирования' : 'Сейчас занято'}
                </div>

                {/* Similar */}
                <div className="mt-6">
                  <div className="text-pine/50 text-xs font-body uppercase tracking-widest mb-3">Похожие объекты</div>
                  {resortObjects
                    .filter((o) => o.id !== obj.id && o.type === obj.type)
                    .slice(0, 2)
                    .map((o) => (
                      <Link
                        key={o.id}
                        to={`/object/${o.slug}`}
                        className="flex items-center gap-3 py-3 border-b border-stone/30 hover:bg-cream transition-colors duration-200 group"
                      >
                        <div className="w-12 h-10 rounded-sm shrink-0 overflow-hidden">
                          <div className="w-full h-full" style={{ background: o.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-pine text-sm font-body font-medium truncate">{o.name}</div>
                          <div className="text-pine/45 text-xs font-body">{o.price.toLocaleString('ru-RU')} ₽/сутки</div>
                        </div>
                        <Icon name="ChevronRight" size={14} className="text-pine/30 group-hover:text-pine transition-colors shrink-0" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
