import { Link } from 'react-router-dom';
import { ResortObject, typeLabels } from '@/data/objects';
import Icon from '@/components/ui/icon';

interface ObjectCardProps {
  obj: ResortObject;
}

export default function ObjectCard({ obj }: ObjectCardProps) {
  return (
    <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
      {/* Image placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ height: 260 }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: obj.color }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-pine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover info */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <p className="text-white/90 text-sm font-body font-light leading-relaxed line-clamp-3">
            {obj.description}
          </p>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-pine/90 text-white/90 text-[10px] font-body uppercase tracking-widest px-2.5 py-1">
            {typeLabels[obj.type]}
          </span>
          {obj.featured && (
            <span className="bg-sand text-pine text-[10px] font-body uppercase tracking-widest px-2.5 py-1">
              Популярный
            </span>
          )}
        </div>

        {/* Availability */}
        {!obj.available && (
          <div className="absolute inset-0 bg-pine/60 flex items-center justify-center">
            <span className="glass-dark text-white font-body text-sm px-4 py-2 uppercase tracking-widest">
              Занято
            </span>
          </div>
        )}

        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/20 text-xs font-body tracking-wider">фото</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-pine text-xl font-semibold mb-1.5">
          {obj.name}
        </h3>
        <p className="text-pine/60 text-sm font-body font-light leading-snug mb-4 line-clamp-2">
          {obj.shortDesc}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-5 text-pine/50 text-xs font-body mb-5">
          <span className="flex items-center gap-1.5">
            <Icon name="Users" size={13} />
            до {obj.capacity} гостей
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="Maximize2" size={13} />
            {obj.area} м²
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {obj.amenities.slice(0, 4).map((a) => (
            <span key={a} className="bg-stone/50 text-pine/70 text-[10px] font-body px-2 py-0.5">
              {a}
            </span>
          ))}
          {obj.amenities.length > 4 && (
            <span className="text-pine/40 text-[10px] font-body px-2 py-0.5">
              +{obj.amenities.length - 4}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone/50">
          <div>
            <span className="font-display text-pine text-2xl font-semibold">
              {obj.price.toLocaleString('ru-RU')} ₽
            </span>
            <span className="text-pine/40 text-xs font-body ml-1">/ {obj.priceUnit}</span>
          </div>
          <Link
            to={`/object/${obj.slug}`}
            className="flex items-center gap-1.5 bg-pine text-white text-xs font-body uppercase tracking-widest px-4 py-2.5 hover:bg-pine-mid transition-colors duration-200"
          >
            Подробнее
            <Icon name="ArrowRight" size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
