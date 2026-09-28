'use client';

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Suspense,
} from 'react';
import dynamic from 'next/dynamic';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface MousePos {
  x: number;
  y: number;
}

// ---------------------------------------------------------------------------
// WebGL Support Check
// ---------------------------------------------------------------------------
function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Static SVG Fallback (shown when WebGL is unavailable or during SSR)
// ---------------------------------------------------------------------------
export function HeroSceneFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      role="img"
      aria-label="AQUEVRA SOLUTIONS — abstract technology network visualization"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-64 h-64 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.04) 50%, transparent 70%)',
            animation: 'aq-pulse 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* SVG network visualization */}
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-[420px] h-auto relative z-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="aq-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="aq-glow-strong">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="aq-nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id="aq-centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="60%" stopColor="#00AAFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        <g stroke="#00D4FF" strokeOpacity="0.25" strokeWidth="1" fill="none" filter="url(#aq-glow)">
          <line x1="200" y1="200" x2="100" y2="100" />
          <line x1="200" y1="200" x2="300" y2="100" />
          <line x1="200" y1="200" x2="330" y2="250" />
          <line x1="200" y1="200" x2="270" y2="330" />
          <line x1="200" y1="200" x2="130" y2="330" />
          <line x1="200" y1="200" x2="70"  y2="250" />
          <line x1="200" y1="200" x2="80"  y2="160" />
          <line x1="100" y1="100" x2="300" y2="100" />
          <line x1="300" y1="100" x2="330" y2="250" />
          <line x1="70"  y1="250" x2="130" y2="330" />
          <line x1="80"  y1="160" x2="100" y2="100" />
        </g>

        {/* Outer rotating ring */}
        <circle
          cx="200" cy="200" r="140"
          stroke="#00D4FF" strokeWidth="0.8" strokeOpacity="0.3"
          strokeDasharray="20 8" fill="none"
          style={{ transformOrigin: '200px 200px', animation: 'aq-spin 20s linear infinite' }}
        />
        <circle
          cx="200" cy="200" r="110"
          stroke="#00D4FF" strokeWidth="0.5" strokeOpacity="0.15"
          strokeDasharray="10 15" fill="none"
          style={{ transformOrigin: '200px 200px', animation: 'aq-spin 14s linear infinite reverse' }}
        />

        {/* Satellite nodes */}
        {([
          { cx: 100, cy: 100, r: 8 },
          { cx: 300, cy: 100, r: 6 },
          { cx: 330, cy: 250, r: 7 },
          { cx: 270, cy: 330, r: 5 },
          { cx: 130, cy: 330, r: 6 },
          { cx: 70,  cy: 250, r: 7 },
          { cx: 80,  cy: 160, r: 5 },
        ] as { cx: number; cy: number; r: number }[]).map((node, i) => (
          <circle
            key={i}
            cx={node.cx} cy={node.cy} r={node.r}
            fill="url(#aq-nodeGrad)"
            filter="url(#aq-glow)"
            style={{ animation: `aq-pulse ${2 + i * 0.3}s ease-in-out infinite alternate` }}
          />
        ))}

        {/* Center node */}
        <circle cx="200" cy="200" r="18" fill="url(#aq-centerGrad)" filter="url(#aq-glow-strong)" />
        <circle cx="200" cy="200" r="8"  fill="#00D4FF" filter="url(#aq-glow-strong)" />

        {/* Floating particles */}
        {([
          { cx: 160, cy: 70,  r: 2   },
          { cx: 340, cy: 170, r: 1.5 },
          { cx: 350, cy: 320, r: 2   },
          { cx: 55,  cy: 300, r: 1.5 },
          { cx: 220, cy: 360, r: 2   },
          { cx: 50,  cy: 120, r: 1.5 },
        ] as { cx: number; cy: number; r: number }[]).map((p, i) => (
          <circle
            key={i}
            cx={p.cx} cy={p.cy} r={p.r}
            fill="#00D4FF" fillOpacity="0.6"
            style={{ animation: `aq-pulse ${1.5 + i * 0.4}s ease-in-out infinite alternate` }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes aq-pulse {
          0%   { opacity: 0.5; transform: scale(0.95); }
          100% { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes aq-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ---------------------------------------------------------------------------
// The actual R3F scene lives in a separate inner file that we load dynamically.
// This avoids any SSR issues with three.js / @react-three/fiber.
// ---------------------------------------------------------------------------
const R3FCanvas = dynamic(
  () => import('@/components/3d/HeroSceneCanvas'),
  { ssr: false }
);

// ---------------------------------------------------------------------------
// Error Boundary
// ---------------------------------------------------------------------------
interface EBState { hasError: boolean }
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  EBState
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): EBState { return { hasError: true }; }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// ---------------------------------------------------------------------------
// Main HeroScene export
// ---------------------------------------------------------------------------
export default function HeroScene() {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);

    setWebglOk(isWebGLSupported());
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    });
  }, []);

  if (webglOk === null) return <HeroSceneFallback />;
  if (!webglOk)         return <HeroSceneFallback />;

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <WebGLErrorBoundary fallback={<HeroSceneFallback />}>
        <Suspense fallback={<HeroSceneFallback />}>
          <R3FCanvas mousePos={mousePos} reducedMotion={reducedMotion} />
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HeroSceneWrapper — for use in HeroSection
// ---------------------------------------------------------------------------
export function HeroSceneWrapper() {
  return <HeroScene />;
}
