'use client';

import { useRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  title: string;
  icon: string;
}

interface ServiceFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ServiceFilter({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ServiceFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCategories = [{ id: 'all', title: 'All Services', icon: 'Grid' }, ...categories];

  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-y border-slate-200/90 py-4 shadow-xs">
      <div className="section-container space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search services (e.g. Website, Branding, SEO, Flex Printing…)"
            aria-label="Search services"
            className={cn(
              'w-full pl-10 pr-10 py-2.5 rounded-xl text-sm text-slate-900 placeholder-slate-400',
              'bg-slate-50 border border-slate-200 shadow-2xs',
              'focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20',
              'transition-all duration-200'
            )}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Tabs — horizontally scrollable */}
        <div
          ref={scrollRef}
          role="tablist"
          aria-label="Service categories"
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  'snap-start flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 whitespace-nowrap cursor-pointer',
                  isActive
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                )}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
