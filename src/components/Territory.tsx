import Icon from '@/components/ui/icon';

const zones = [
  { icon: 'Home', label: 'Дома и коттеджи', desc: '6 объектов', color: 'bg-pine', x: '20%', y: '30%' },
  { icon: 'Tent', label: 'Беседки', desc: '5 беседок', color: 'bg-wood', x: '60%', y: '20%' },
  { icon: 'Car', label: 'Парковка', desc: '50 мест', color: 'bg-lake', x: '80%', y: '65%' },
  { icon: 'Baby', label: 'Детская площадка', desc: 'Игровой комплекс', color: 'bg-sand', x: '35%', y: '65%' },
  { icon: 'Flame', label: 'Зоны барбекю', desc: '8 мангальных зон', color: 'bg-pine-mid', x: '50%', y: '45%' },
  { icon: 'Footprints', label: 'Маршруты', desc: '3 тропы по лесу', color: 'bg-wood-light', x: '15%', y: '70%' },
];

const features = [
  { icon: 'Trees', title: 'Сосновый лес', desc: 'Вековые сосны, чистый воздух, тишина. Идеально для прогулок и медитации.' },
  { icon: 'Waves', title: 'Озеро', desc: 'Живописное озеро в 5 минутах пешком. Купание, рыбалка, закаты у воды.' },
  { icon: 'Flame', title: 'Мангальные зоны', desc: '8 оборудованных зон барбекю с мангалами и столами по всей территории.' },
  { icon: 'Baby', title: 'Детская площадка', desc: 'Просторный игровой комплекс в центре территории для детей всех возрастов.' },
  { icon: 'Footprints', title: 'Прогулочные маршруты', desc: '3 размеченных маршрута по лесу — от 1 до 5 км. Карты у администратора.' },
  { icon: 'Car', title: 'Парковка', desc: 'Бесплатная охраняемая парковка на 50 автомобилей прямо на территории.' },
];

export default function Territory() {
  return (
    <section id="territory" className="py-32 bg-pine">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-sand/50" />
          <span className="text-sand/60 text-xs uppercase tracking-[0.25em] font-body">Территория</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display text-white text-4xl xl:text-5xl font-semibold leading-tight">
            12 гектаров<br />
            <em className="not-italic text-sand">живой природы</em>
          </h2>
          <p className="text-white/50 font-body font-light text-sm max-w-xs leading-relaxed">
            Просторная территория с продуманной инфраструктурой — всё необходимое для комфортного отдыха в лесу.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="relative rounded-sm overflow-hidden mb-16" style={{ height: 480 }}>
          {/* Background */}
          <div className="absolute inset-0 bg-pine-mid/80" style={{
            background: 'radial-gradient(ellipse at 40% 50%, hsl(150 28% 30%) 0%, hsl(150 35% 14%) 70%)'
          }} />

          {/* Grid lines - map style */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Forest areas */}
          <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-2/3 rounded-sm opacity-20"
                 style={{ background: 'hsl(150 35% 25%)' }} />
            <div className="absolute bottom-0 right-0 w-2/5 h-1/2 rounded-sm opacity-20"
                 style={{ background: 'hsl(150 35% 25%)' }} />
            {/* Lake */}
            <div className="absolute top-1/2 right-8 w-24 h-16 rounded-full opacity-30"
                 style={{ background: 'hsl(210 48% 35%)', transform: 'translate(0, -50%) rotate(-15deg)' }} />
          </div>

          {/* Zone markers */}
          {zones.map((zone) => (
            <div
              key={zone.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: zone.x, top: zone.y }}
            >
              <div className={`w-10 h-10 rounded-full ${zone.color} flex items-center justify-center shadow-lg border-2 border-white/20 transition-transform duration-200 group-hover:scale-110`}>
                <Icon name={zone.icon} size={16} className="text-white" />
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 glass-dark text-white text-xs font-body px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="font-medium">{zone.label}</div>
                <div className="text-white/60">{zone.desc}</div>
              </div>
            </div>
          ))}

          {/* Map label */}
          <div className="absolute bottom-4 left-4 text-white/30 text-xs font-body tracking-widest uppercase">
            Схема территории · Сосновый бор
          </div>

          {/* Scale */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/30 text-xs font-body">
            <div className="w-12 h-px bg-white/30" />
            <span>200 м</span>
          </div>

          {/* Placeholder note */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="glass-dark rounded-sm px-6 py-3 text-white/30 text-sm font-body text-center">
              Интерактивная карта территории
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((f) => (
            <div key={f.title} className="bg-pine p-7 group hover:bg-pine-mid transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-sand/15 flex items-center justify-center mb-4 group-hover:bg-sand/25 transition-colors duration-300">
                <Icon name={f.icon} size={18} className="text-sand" />
              </div>
              <h3 className="font-display text-white text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm font-body font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}