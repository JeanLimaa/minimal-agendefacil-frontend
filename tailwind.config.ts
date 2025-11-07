import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do sistema (shadcn/ui)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Cores personalizada
        brand: {
          50: "#FFF7F9", // tom mais claro
          100: "#FFEAF0",
          200: "#FFD2DE", // secundária
          300: "#F5A9B8",
          400: "#E9869B",
          500: "#CF7486", // principal
          600: "#B96578",
          700: "#A25669",
          800: "#864656",
          900: "#6B3846",

          // Aliases semânticos
          main: "#CF7486",
          hover: "#B96578",
          light: "#FFD2DE",
          lightest: "#FFF7F9",
        },

        text: {
          // Escala de gray para textos - mantendo as tonalidades exatas
          primary: "#111827",
          secondary: "#4B5563",
          tertiary: "#6B7280",
          light: "#F9FAFB",
        },
        bg: {
          primary: "#F9FAFB",
          secondary: "#F3F4F6",
          dark: "#1F2937",
          darker: "#111827",
        },
        status: {
          success: {
            DEFAULT: "#10B981",
            light: "#D1FAE5",
            lighter: "#ECFDF5",
            dark: "#059669",
            darker: "#047857",
            foreground: "#065F46",
          },
          error: {
            DEFAULT: "#EF4444",
            light: "#FEE2E2",
            lighter: "#FEF2F2",
            dark: "#DC2626",
            darker: "#B91C1C",
            foreground: "#991B1B",
          },
          warning: {
            DEFAULT: "#F59E0B",
            light: "#FDE68A",
            lighter: "#FEF3C7",
            lightest: "#FEFCE8",
            dark: "#D97706",
          },
          info: {
            DEFAULT: "#3B82F6",
            light: "#DBEAFE",
            lighter: "#EFF6FF",
            dark: "#2563EB",
            darker: "#1D4ED8",
            foreground: "#1E40AF",
          },
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
