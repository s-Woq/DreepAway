import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ArrowLink from '@/components/ArrowLink';
import { useMarket } from '@/i18n';
import { INTERNATIONAL_COST_MAX, INTERNATIONAL_COST_MIN } from '@/lib/cost-estimates';

const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');

export default function SavingsCalculator() {
  const { c, p } = useMarket();
  const { employees, salary, category, categories, usCost, intlRange, diff, disclaimer, cta1, cta2, cta1To, cta2To } = c.calculator;

  const [headcount, setHeadcount] = useState(5);
  const [salaryVal, setSalaryVal] = useState(80000);
  const [categoryVal, setCategoryVal] = useState(categories[0]);

  const usTotal = headcount * salaryVal;
  // Illustrative international range: 45–60% of US cost
  const intlLow = usTotal * INTERNATIONAL_COST_MIN;
  const intlHigh = usTotal * INTERNATIONAL_COST_MAX;
  const diffLow = usTotal - intlHigh;
  const diffHigh = usTotal - intlLow;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{c.calculator.eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-4xl">
          {c.calculator.h2}
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <label className="flex justify-between text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">
                  <span>{employees}</span><span className="text-crimson tabular-nums">{headcount}</span>
                </label>
                <input type="range" min={1} max={50} value={headcount} onChange={(e) => setHeadcount(Number(e.target.value))} className="w-full accent-crimson" />
              </div>
              <div>
                <label className="flex justify-between text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">
                  <span>{salary}</span><span className="text-crimson tabular-nums">{fmt(salaryVal)}</span>
                </label>
                <input type="range" min={40000} max={200000} step={5000} value={salaryVal} onChange={(e) => setSalaryVal(Number(e.target.value))} className="w-full accent-crimson" />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">{category}</label>
                <select value={categoryVal} onChange={(e) => setCategoryVal(e.target.value)} className="w-full bg-transparent border-b border-ink/20 py-3 text-lg font-light focus:outline-none focus:border-crimson">
                  {categories.map((cat) => <option key={cat}>{cat}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-12 md:border-l md:border-ink/10">
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-2">{usCost}</p>
                <p className="font-display font-light tracking-[-0.03em] text-5xl md:text-7xl">{fmt(usTotal)}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-2">{intlRange}</p>
                <p className="font-display font-bold tracking-[-0.03em] text-5xl md:text-7xl text-crimson">{fmt(intlLow)} – {fmt(intlHigh)}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-2">{diff}</p>
                <p className="font-display font-bold tracking-[-0.03em] text-5xl md:text-7xl">{fmt(diffLow)} – {fmt(diffHigh)}</p>
              </div>
            </div>
            <p className="mt-10 text-xs text-ink/45 leading-relaxed max-w-lg">
              {disclaimer}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <ArrowLink to={p(cta1To || 'contact')} variant="dark">{cta1}</ArrowLink>
              <ArrowLink to={p(cta2To || 'contact')} variant="dark">{cta2}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
