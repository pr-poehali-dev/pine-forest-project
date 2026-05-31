import { useState, useMemo } from 'react';
import { resortObjects, ObjectType, typeLabels } from '@/data/objects';
import ObjectCard from '@/components/ObjectCard';
import Icon from '@/components/ui/icon';

type FilterType = ObjectType | 'all';
type AvailFilter = 'all' | 'available';

const capacityOptions = [
  { label: 'Любая', value: 0 },
  { label: 'До 4 человек', value: 4 },
  { label: 'До 8 человек', value: 8 },
  { label: 'До 12 человек', value: 12 },
  { label: 'Более 12', value: 13 },
];

const priceOptions = [
  { label: 'Любая', max: Infinity },
  { label: 'До 2 000 ₽', max: 2000 },
  { label: 'До 4 000 ₽', max: 4000 },
  { label: 'До 6 000 ₽', max: 6000 },
  { label: 'Свыше 6 000 ₽', max: Infinity, min: 6000 },
];

export default function CatalogSection() {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [capacityFilter, setCapacityFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);
  const [availFilter, setAvailFilter] = useState<AvailFilter>('all');

  const filtered = useMemo(() => {
    return resortObjects.filter((obj) => {
      if (typeFilter !== 'all' && obj.type !== typeFilter) return false;
      if (capacityFilter > 0) {
        if (capacityFilter === 13 && obj.capacity <= 12) return false;
        if (capacityFilter < 13 && obj.capacity > capacityFilter) return false;
      }
      const pOpt = priceOptions[priceFilter];
      if (pOpt.min !== undefined && obj.price < pOpt.min) return false;
      if (obj.price > pOpt.max) return false;
      if (availFilter === 'available' && !obj.available) return false;
      return true;
    });
  }, [typeFilter, capacityFilter, priceFilter, availFilter]);

  const typeButtons: { label: string; value: FilterType }[] = [
    { label: 'Все объекты', value: 'all' },
    { label: typeLabels.house, value: 'house' },
    { label: typeLabels.cottage, value: 'cottage' },
    { label: typeLabels.gazebo, value: 'gazebo' },
  ];

  return (
    <section id="catalog" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-pine" />
          <span className="text-pine/60 text-xs uppercase tracking-[0.25em] font-body">Каталог объектов</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-pine text-4xl xl:text-5xl font-semibold leading-tight">
            Выберите<br />
            <em className="not-italic text-wood">свой дом</em> в лесу
          </h2>
          <p className="text-pine/60 font-body font-light text-sm max-w-xs leading-relaxed">
            {resortObjects.length} объектов на территории базы. Дома, коттеджи и беседки для любого формата отдыха.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-cream rounded-sm p-5 mb-10 space-y-4">
          {/* Type tabs */}
          <div className="flex flex-wrap gap-2">
            {typeButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setTypeFilter(btn.value)}
                className={`px-4 py-2 text-xs font-body uppercase tracking-widest transition-all duration-200 ${
                  typeFilter === btn.value
                    ? 'bg-pine text-white'
                    : 'bg-white text-pine/60 hover:bg-pine/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Capacity */}
            <div className="flex items-center gap-2">
              <Icon name="Users" size={14} className="text-pine/50" />
              <select
                value={capacityFilter}
                onChange={(e) => setCapacityFilter(Number(e.target.value))}
                className="bg-white border border-stone/60 text-pine/80 text-xs font-body px-3 py-2 outline-none focus:border-pine transition-colors"
              >
                {capacityOptions.map((o) => (
                  <option key={o.label} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <Icon name="Banknote" size={14} className="text-pine/50" />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="bg-white border border-stone/60 text-pine/80 text-xs font-body px-3 py-2 outline-none focus:border-pine transition-colors"
              >
                {priceOptions.map((o, i) => (
                  <option key={i} value={i}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Availability */}
            <button
              onClick={() => setAvailFilter(availFilter === 'all' ? 'available' : 'all')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-body uppercase tracking-widest transition-all duration-200 ${
                availFilter === 'available'
                  ? 'bg-pine text-white'
                  : 'bg-white border border-stone/60 text-pine/60 hover:bg-pine/10'
              }`}
            >
              <Icon name="CheckCircle" size={13} />
              Только свободные
            </button>

            {/* Results count */}
            <span className="ml-auto text-pine/40 text-xs font-body">
              Найдено: {filtered.length}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((obj) => (
              <ObjectCard key={obj.id} obj={obj} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Icon name="SearchX" size={48} className="text-pine/20 mb-4" />
            <p className="text-pine/40 font-body font-light text-lg">Ничего не найдено</p>
            <p className="text-pine/30 font-body text-sm mt-2">Попробуйте изменить фильтры</p>
          </div>
        )}
      </div>
    </section>
  );
}
