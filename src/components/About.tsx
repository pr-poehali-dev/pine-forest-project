export default function About() {
  const stats = [
    { value: '12 га', label: 'Территория' },
    { value: '18+', label: 'Объектов' },
    { value: '5 мин', label: 'До озера' },
    { value: '2003', label: 'Год основания' },
  ];

  return (
    <section id="about" className="py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-pine" />
          <span className="text-pine/60 text-xs uppercase tracking-[0.25em] font-body">О базе отдыха</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — text */}
          <div>
            <h2 className="font-display text-pine text-4xl xl:text-5xl font-semibold leading-tight mb-8">
              Место, где время<br />
              <em className="not-italic text-wood">замедляется</em>
            </h2>

            <div className="space-y-5 text-pine/70 font-body font-light text-base leading-relaxed">
              <p>
                «Сосновый бор» — просторная зона отдыха, раскинувшаяся среди вековых сосен на берегу живописного озера. Здесь нет суеты городской жизни — только шёпот леса, чистый воздух и пространство для настоящего отдыха.
              </p>
              <p>
                Мы предлагаем уютные деревянные домики и беседки для семей и компаний любого размера. Каждый объект обустроен с заботой о вашем комфорте — мангальные зоны, детские площадки, прогулочные маршруты по лесу.
              </p>
              <p>
                Идеальное место для тех, кто ценит природу, тишину и качественный отдых вдали от городского шума.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-pine/15">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-pine text-3xl font-semibold mb-1">
                    {s.value}
                  </div>
                  <div className="text-pine/50 text-xs font-body uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo collage */}
          <div className="grid grid-cols-2 gap-3 relative">
            {/* Large top-left */}
            <div className="col-span-1 row-span-2 img-placeholder rounded-sm aspect-[3/4] relative">
              <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
                <span className="text-white/40 text-xs font-body">Сосновый лес</span>
              </div>
            </div>

            {/* Top right */}
            <div className="img-placeholder rounded-sm aspect-square" style={{ background: 'linear-gradient(135deg, hsl(30 28% 42%) 0%, hsl(38 30% 52%) 100%)' }}>
              <div className="h-full flex items-end p-3">
                <span className="text-white/40 text-xs font-body">Беседки</span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="img-placeholder rounded-sm aspect-square" style={{ background: 'linear-gradient(135deg, hsl(210 48% 22%) 0%, hsl(210 38% 35%) 100%)' }}>
              <div className="h-full flex items-end p-3">
                <span className="text-white/40 text-xs font-body">Домики</span>
              </div>
            </div>

            {/* Bottom wide */}
            <div className="col-span-2 img-placeholder rounded-sm" style={{ height: 140, background: 'linear-gradient(135deg, hsl(150 28% 26%) 0%, hsl(38 30% 52%) 100%)' }}>
              <div className="h-full flex items-end p-3">
                <span className="text-white/40 text-xs font-body">Прогулочные зоны</span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sand/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pine/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
