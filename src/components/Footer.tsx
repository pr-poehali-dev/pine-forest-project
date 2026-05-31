import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-pine border-t border-white/10">
      {/* CTA banner */}
      <div className="bg-pine-mid border-b border-white/10">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-white text-3xl xl:text-4xl font-semibold mb-3">
              Готовы к отдыху?
            </h2>
            <p className="text-white/55 font-body font-light text-base">
              Забронируйте объект прямо сейчас и получите лучшую цену
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/booking"
              className="flex items-center justify-center gap-2 bg-sand text-pine px-8 py-4 text-sm font-body font-medium uppercase tracking-widest hover:bg-sand-light transition-colors duration-200"
            >
              <Icon name="Calendar" size={16} />
              Забронировать
            </Link>
            <a
              href="tel:+79000000000"
              className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-sm font-body font-light uppercase tracking-widest hover:bg-white/10 transition-colors duration-200"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🌲</span>
              <div>
                <div className="font-display text-white text-lg font-semibold">Сосновый бор</div>
                <div className="text-sand/50 text-[10px] uppercase tracking-[0.15em] font-body">Зона отдыха</div>
              </div>
            </div>
            <p className="text-white/45 font-body font-light text-sm leading-relaxed mb-6">
              Просторная зона отдыха среди вековых сосен. Дома, беседки, баня и живая природа для вашего отдыха.
            </p>
            <div className="flex gap-3">
              {['vk', 'Telegram', 'Instagram'].map((soc) => (
                <a
                  key={soc}
                  href="#"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:text-sand hover:border-sand/30 transition-all duration-200 text-xs font-body"
                >
                  {soc === 'vk' ? 'ВК' : soc === 'Telegram' ? 'TG' : 'IG'}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 text-xs font-body uppercase tracking-[0.2em] mb-5">Навигация</h4>
            <ul className="space-y-3">
              {[
                { label: 'Главная', href: '/' },
                { label: 'Каталог объектов', href: '/catalog' },
                { label: 'О базе', href: '/#about' },
                { label: 'Территория', href: '/#territory' },
                { label: 'Галерея', href: '/#gallery' },
                { label: 'Бронирование', href: '/booking' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-sand text-sm font-body font-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white/80 text-xs font-body uppercase tracking-[0.2em] mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={14} className="text-sand/60 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+79000000000" className="text-white/70 hover:text-sand text-sm font-body font-light transition-colors">
                    +7 (900) 000-00-00
                  </a>
                  <div className="text-white/30 text-xs font-body mt-0.5">Ежедневно с 8:00 до 21:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={14} className="text-sand/60 mt-0.5 shrink-0" />
                <a href="mailto:info@sosnoviybor.ru" className="text-white/70 hover:text-sand text-sm font-body font-light transition-colors">
                  info@sosnoviybor.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={14} className="text-sand/60 mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm font-body font-light leading-relaxed">
                  Псковская область,<br />
                  Печорский район,<br />
                  д. Сосновка
                </div>
              </li>
            </ul>
          </div>

          {/* Hours + info */}
          <div>
            <h4 className="text-white/80 text-xs font-body uppercase tracking-[0.2em] mb-5">Заезд и выезд</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/45 text-sm font-body font-light">Заезд</span>
                <span className="text-white/80 text-sm font-body">с 14:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/45 text-sm font-body font-light">Выезд</span>
                <span className="text-white/80 text-sm font-body">до 12:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/45 text-sm font-body font-light">Минимум</span>
                <span className="text-white/80 text-sm font-body">1 сутки</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white/45 text-sm font-body font-light">Животные</span>
                <span className="text-sand/70 text-sm font-body">По согласованию</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 items-center">
          <span className="text-white/25 text-xs font-body">
            © 2024 Зона отдыха «Сосновый бор». Все права защищены.
          </span>
          <div className="flex gap-5">
            <a href="#" className="text-white/25 hover:text-white/50 text-xs font-body transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/25 hover:text-white/50 text-xs font-body transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
