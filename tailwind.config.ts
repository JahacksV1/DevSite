import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ffc6',
          dim: '#00d4a3',
          hover: '#33ffd4',
        },
        secondary: {
          DEFAULT: '#a78bfa',
          bright: '#c4b5fd',
          dim: '#8b5cf6',
        },
        bg: {
          primary: '#0a0a0f',
          secondary: '#111118',
          tertiary: '#18181f',
          elevated: '#1f1f28',
        },
        text: {
          primary: '#f4f4f5',
          secondary: '#a1a1aa',
          muted: '#71717a',
          inverse: '#0a0a0f',
        },
        border: {
          subtle: '#27272a',
          default: '#3f3f46',
          accent: '#00ffc6',
          purple: '#a78bfa',
        },
        success: '#00ffc6',
        warning: '#fbbf24',
        error: '#ef4444',
        info: '#a78bfa',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'Fira Code',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.625' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 198, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 255, 198, 0.4)',
        'glow-purple': '0 0 20px rgba(167, 139, 250, 0.25)',
        'glow-purple-lg': '0 0 30px rgba(167, 139, 250, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 198, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 198, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
