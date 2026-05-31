import { useState } from 'react';
import { resortObjects, typeLabels } from '@/data/objects';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const [selectedObject, setSelectedObject] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const obj = resortObjects.find((o) => o.id === selectedObject);

  const nights = (() => {
    if (!checkIn || !checkOut) return 0;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  })();

  const total = obj ? obj.price * Math.max(nights, 1) : 0;
  const deposit = Math.round(total * 0.3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedObject || !checkIn || !checkOut || !name || !phone) return;
    setSubmitted(true);
  };

  const filteredObjects = resortObjects.filter((o) => {
    if (typeFilter !== 'all' && o.type !== typeFilter) return false;
    if (!o.available) return false;
    return true;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24">
        {/* Page hero */}
        <div className="bg-pine py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-sand/40" />
              <span className="text-sand/50 text-xs uppercase tracking-[0.25em] font-body">Бронирование</span>
            </div>
            <h1 className="font-display text-white text-4xl xl:text-5xl font-semibold">
              Забронировать отдых
            </h1>
            <p className="text-white/50 font-body font-light text-base mt-3 max-w-md">
              Выберите объект, укажите даты и оставьте заявку — мы свяжемся в течение 30 минут.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          {submitted ? (
            /* Success state */
            <div className="max-w-xl mx-auto text-center py-20">
              <div className="w-20 h-20 rounded-full bg-pine/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-pine" />
              </div>
              <h2 className="font-display text-pine text-3xl font-semibold mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-pine/60 font-body font-light text-base leading-relaxed mb-8">
                Мы получили вашу заявку и свяжемся с вами в ближайшее время. Проверьте телефон — мы позвоним на номер{' '}
                <strong className="font-medium text-pine">{phone}</strong>.
              </p>
              {obj && (
                <div className="bg-white border border-stone/50 p-6 text-left mb-8">
                  <div className="text-pine/50 text-xs font-body uppercase tracking-widest mb-3">Детали заявки</div>
                  <div className="space-y-2 text-sm font-body text-pine/80">
                    <div className="flex justify-between"><span className="text-pine/50">Объект</span><span>{obj.name}</span></div>
                    <div className="flex justify-between"><span className="text-pine/50">Заезд</span><span>{new Date(checkIn).toLocaleDateString('ru-RU')}</span></div>
                    <div className="flex justify-between"><span className="text-pine/50">Выезд</span><span>{new Date(checkOut).toLocaleDateString('ru-RU')}</span></div>
                    <div className="flex justify-between"><span className="text-pine/50">Гостей</span><span>{guests}</span></div>
                    <div className="flex justify-between font-medium"><span>Сумма</span><span>{total.toLocaleString('ru-RU')} ₽</span></div>
                  </div>
                </div>
              )}
              <button
                onClick={() => { setSubmitted(false); setSelectedObject(null); setCheckIn(''); setCheckOut(''); }}
                className="bg-pine text-white px-8 py-3 font-body text-sm uppercase tracking-widest hover:bg-pine-mid transition-colors"
              >
                Новая заявка
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-16">
              {/* Left — form */}
              <div className="space-y-10">
                {/* Step 1: Choose object */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-pine text-white text-xs font-body flex items-center justify-center font-medium">1</div>
                    <h2 className="font-display text-pine text-2xl font-semibold">Выберите объект</h2>
                  </div>

                  {/* Type filter */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[
                      { label: 'Все', value: 'all' },
                      { label: 'Дома', value: 'house' },
                      { label: 'Коттеджи', value: 'cottage' },
                      { label: 'Беседки', value: 'gazebo' },
                    ].map((btn) => (
                      <button
                        key={btn.value}
                        onClick={() => setTypeFilter(btn.value)}
                        className={`px-4 py-1.5 text-xs font-body uppercase tracking-widest transition-all duration-200 ${
                          typeFilter === btn.value
                            ? 'bg-pine text-white'
                            : 'bg-white border border-stone/60 text-pine/60 hover:bg-pine/10'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {filteredObjects.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => setSelectedObject(o.id)}
                        className={`text-left border-2 p-4 transition-all duration-200 hover:border-pine ${
                          selectedObject === o.id
                            ? 'border-pine bg-pine/5'
                            : 'border-stone/50 bg-white'
                        }`}
                      >
                        {/* Mini image placeholder */}
                        <div
                          className="w-full rounded-sm mb-3"
                          style={{ height: 80, background: o.color }}
                        />
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-display text-pine text-base font-semibold">{o.name}</div>
                            <div className="text-pine/50 text-xs font-body mt-0.5">
                              {typeLabels[o.type]} · до {o.capacity} чел.
                            </div>
                          </div>
                          {selectedObject === o.id && (
                            <Icon name="CheckCircle" size={18} className="text-pine shrink-0 mt-0.5" />
                          )}
                        </div>
                        <div className="mt-2 font-display text-pine text-lg font-semibold">
                          {o.price.toLocaleString('ru-RU')} <span className="text-pine/40 text-xs font-body font-normal">₽/сутки</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Dates and guests */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-pine text-white text-xs font-body flex items-center justify-center font-medium">2</div>
                    <h2 className="font-display text-pine text-2xl font-semibold">Даты и гости</h2>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Заезд</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full border border-stone/60 bg-white text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Выезд</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full border border-stone/60 bg-white text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Гостей</label>
                      <div className="flex items-center border border-stone/60 bg-white">
                        <button
                          type="button"
                          onClick={() => setGuests((g) => Math.max(1, g - 1))}
                          className="w-12 h-12 flex items-center justify-center text-pine/50 hover:text-pine hover:bg-pine/5 transition-colors"
                        >
                          <Icon name="Minus" size={14} />
                        </button>
                        <span className="flex-1 text-center text-pine font-display text-lg font-semibold">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests((g) => Math.min(obj?.capacity || 20, g + 1))}
                          className="w-12 h-12 flex items-center justify-center text-pine/50 hover:text-pine hover:bg-pine/5 transition-colors"
                        >
                          <Icon name="Plus" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Contacts */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-pine text-white text-xs font-body flex items-center justify-center font-medium">3</div>
                    <h2 className="font-display text-pine text-2xl font-semibold">Ваши данные</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Имя *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        className="w-full border border-stone/60 bg-white text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors placeholder:text-pine/30"
                      />
                    </div>
                    <div>
                      <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Телефон *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full border border-stone/60 bg-white text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors placeholder:text-pine/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-pine/60 text-xs font-body uppercase tracking-widest mb-2">Пожелания</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Дополнительные пожелания, вопросы..."
                      rows={4}
                      className="w-full border border-stone/60 bg-white text-pine font-body text-sm px-4 py-3 outline-none focus:border-pine transition-colors placeholder:text-pine/30 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right — sticky summary */}
              <div className="relative">
                <div className="sticky top-28">
                  <div className="bg-white border border-stone/50 shadow-sm">
                    {/* Header */}
                    <div className="bg-pine p-5">
                      <div className="text-sand/70 text-xs font-body uppercase tracking-widest mb-1">Ваш выбор</div>
                      <div className="font-display text-white text-xl font-semibold">
                        {obj ? obj.name : 'Объект не выбран'}
                      </div>
                      {obj && (
                        <div className="text-white/50 text-xs font-body mt-1">
                          {typeLabels[obj.type]} · до {obj.capacity} гостей · {obj.area} м²
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Image placeholder */}
                      {obj && (
                        <div className="rounded-sm overflow-hidden" style={{ height: 120 }}>
                          <div className="w-full h-full" style={{ background: obj.color }} />
                        </div>
                      )}

                      {/* Dates */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-body">
                          <span className="text-pine/50">Заезд</span>
                          <span className="text-pine font-medium">
                            {checkIn ? new Date(checkIn).toLocaleDateString('ru-RU') : '—'}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-body">
                          <span className="text-pine/50">Выезд</span>
                          <span className="text-pine font-medium">
                            {checkOut ? new Date(checkOut).toLocaleDateString('ru-RU') : '—'}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-body">
                          <span className="text-pine/50">Ночей</span>
                          <span className="text-pine font-medium">{nights || '—'}</span>
                        </div>
                        <div className="flex justify-between text-sm font-body">
                          <span className="text-pine/50">Гостей</span>
                          <span className="text-pine font-medium">{guests}</span>
                        </div>
                      </div>

                      {/* Price breakdown */}
                      {obj && nights > 0 && (
                        <div className="border-t border-stone/40 pt-4 space-y-2">
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-pine/50">
                              {obj.price.toLocaleString('ru-RU')} ₽ × {nights} ночей
                            </span>
                            <span className="text-pine">{total.toLocaleString('ru-RU')} ₽</span>
                          </div>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-pine/50">Депозит (30%)</span>
                            <span className="text-pine">{deposit.toLocaleString('ru-RU')} ₽</span>
                          </div>
                          <div className="flex justify-between text-base font-display font-semibold border-t border-stone/40 pt-2">
                            <span className="text-pine">Итого</span>
                            <span className="text-pine">{total.toLocaleString('ru-RU')} ₽</span>
                          </div>
                        </div>
                      )}

                      {/* Rules */}
                      <div className="bg-cream p-3 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-body text-pine/60">
                          <Icon name="Clock" size={12} />
                          Заезд с 14:00 · Выезд до 12:00
                        </div>
                        <div className="flex items-center gap-2 text-xs font-body text-pine/60">
                          <Icon name="CreditCard" size={12} />
                          Депозит 30% при бронировании
                        </div>
                        <div className="flex items-center gap-2 text-xs font-body text-pine/60">
                          <Icon name="Shield" size={12} />
                          Отмена за 7 дней — без штрафа
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        disabled={!selectedObject || !checkIn || !checkOut || !name || !phone}
                        className="w-full bg-pine text-white py-4 font-body text-sm uppercase tracking-widest hover:bg-pine-mid transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Отправить заявку
                      </button>
                      <p className="text-pine/35 text-xs font-body text-center leading-relaxed">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mt-4 flex items-center gap-3 justify-center p-4 border border-stone/40">
                    <Icon name="Phone" size={16} className="text-pine/50" />
                    <div>
                      <div className="text-pine/50 text-xs font-body">Или позвоните нам</div>
                      <a href="tel:+79000000000" className="text-pine font-body text-sm font-medium hover:text-wood transition-colors">
                        +7 (900) 000-00-00
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
