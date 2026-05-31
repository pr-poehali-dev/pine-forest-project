import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const features = [
  { icon: 'Trees', label: 'Сосновый лес' },
  { icon: 'Maximize', label: 'Просторная территория' },
  { icon: 'Home', label: 'Беседки и дома' },
  { icon: 'Users', label: 'Семейный отдых' },
  { icon: 'Car', label: 'Парковка' },
  { icon: 'Flame', label: 'Зоны барбекю' },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Panoramic image placeholder */}
      <div className="absolute inset-0 img-placeholder">
        <div className="absolute inset-0 bg-gradient-to-b from-pine/40 via-transparent to-pine/80" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="text-white font-display text-2xl tracking-widest uppercase">
            Панорамное фото соснового леса
          </span>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-48">
        {/* Badge */}
        <div className="glass-dark rounded-full px-5 py-2 mb-8 inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
          <span className="text-white/80 text-xs font-body uppercase tracking-[0.2em]">
            Зона отдыха · Псковская область
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-white font-bold leading-none mb-6 animate-fade-in"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          Сосновый бор
        </h1>

        {/* Tagline */}
        <p className="text-white/80 font-body font-light mb-12 max-w-xl mx-auto animate-fade-in"
           style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
          Отдых среди сосен и чистого воздуха
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link
            to="/catalog"
            className="flex items-center justify-center gap-2 bg-sand text-pine px-8 py-4 font-body font-medium text-sm uppercase tracking-widest hover:bg-sand-light transition-all duration-300 hover:scale-[1.02]"
          >
            <Icon name="Home" size={16} />
            Выбрать домик
          </Link>
          <a
            href="#territory"
            className="flex items-center justify-center gap-2 glass border border-white/20 text-white px-8 py-4 font-body font-light text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
          >
            <Icon name="Map" size={16} />
            Посмотреть территорию
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.2em] font-body">Листайте вниз</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Quick features bar */}
      <div className="relative z-10 bg-pine/95 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col items-center gap-2.5 py-6 px-4 text-center ${
                  i < features.length - 1 ? 'border-r border-white/10' : ''
                } ${i >= 3 ? 'sm:border-t-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">
                  <Icon name={f.icon} size={18} className="text-sand" />
                </div>
                <span className="text-white/80 text-xs font-body font-light tracking-wide leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}