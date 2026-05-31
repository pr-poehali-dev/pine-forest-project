const galleryItems = [
  { label: 'Сосновый лес', span: 'col-span-2 row-span-2', color: 'linear-gradient(135deg, hsl(150 35% 18%) 0%, hsl(150 28% 32%) 100%)', height: '' },
  { label: 'Вечерняя беседка', span: 'col-span-1 row-span-1', color: 'linear-gradient(135deg, hsl(210 48% 22%) 0%, hsl(150 35% 22%) 100%)', height: '' },
  { label: 'Домик в лесу', span: 'col-span-1 row-span-1', color: 'linear-gradient(135deg, hsl(30 28% 42%) 0%, hsl(150 28% 30%) 100%)', height: '' },
  { label: 'Закат у озера', span: 'col-span-1 row-span-2', color: 'linear-gradient(180deg, hsl(38 40% 62%) 0%, hsl(210 48% 28%) 100%)', height: '' },
  { label: 'Природа', span: 'col-span-1 row-span-1', color: 'linear-gradient(135deg, hsl(150 25% 35%) 0%, hsl(150 35% 22%) 100%)', height: '' },
  { label: 'Зона барбекю', span: 'col-span-1 row-span-1', color: 'linear-gradient(135deg, hsl(20 35% 38%) 0%, hsl(30 28% 28%) 100%)', height: '' },
  { label: 'Терраса', span: 'col-span-1 row-span-1', color: 'linear-gradient(135deg, hsl(38 25% 60%) 0%, hsl(30 25% 42%) 100%)', height: '' },
  { label: 'Утро в лесу', span: 'col-span-2 row-span-1', color: 'linear-gradient(135deg, hsl(150 22% 30%) 0%, hsl(210 38% 32%) 100%)', height: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-pine" />
          <span className="text-pine/60 text-xs uppercase tracking-[0.25em] font-body">Галерея</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-pine text-4xl xl:text-5xl font-semibold leading-tight">
            Атмосфера<br />
            <em className="not-italic text-wood">соснового бора</em>
          </h2>
          <p className="text-pine/60 font-body font-light text-sm max-w-xs leading-relaxed">
            Живая природа, уютные интерьеры и незабываемые вечера у огня — атмосфера, которую нельзя передать словами.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '180px',
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative overflow-hidden group cursor-pointer rounded-sm`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: item.color }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-pine/0 group-hover:bg-pine/30 transition-all duration-400" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-body text-sm font-light tracking-wide">
                  {item.label}
                </span>
              </div>
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/15 text-xs font-body tracking-wider">фото</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-3 mt-3 md:hidden">
          {galleryItems.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm"
              style={{ height: 160 }}
            >
              <div className="absolute inset-0" style={{ background: item.color }} />
              <div className="absolute inset-0 flex items-end p-3">
                <span className="text-white/50 text-xs font-body">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
