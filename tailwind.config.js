// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          bg: { app: '#F1EFE7', surface: '#EAE7DC' },
          border: { subtle: '#DCD8C9' },
          text: { primary: '#2F2F2F', muted: '#6E6A5E' },
          brand: { primary: '#2A5D9E', accent: '#FFD166' },
          status: { success: '#1B4332', warning: '#E67E22', error: '#D72638' }
        },
        // Dark Mode
        dark: {
          bg: { app: '#121212', surface: '#1A1A1A' },
          border: { subtle: '#3D3A31' },
          text: { primary: '#F1EFE7', muted: '#B8B3A4' },
          brand: { primary: '#5B8EE0', accent: '#FFD166' },
          status: { success: '#6A994E', warning: '#E67E22', error: '#D72638' }
        }
      }
    }
  }
}