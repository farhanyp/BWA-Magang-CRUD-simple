import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        fontFamily: {
          primary: 'Playfair Display',
          body: 'Work Sans',
        },
        container: {
          padding: {
            DEFAULT: '1rem',
            lg: '3rem',
          },
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        extend: {
          content: {
            about: 'url("/src/assets/img/outline-text/about.svg")',
            portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
            services: 'url("/src/assets/img/outline-text/services.svg")',
            testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
            contact: 'url("/src/assets/img/outline-text/contact.svg")',
          },
          colors: {
            primary: '#050402',
            secondary: '#1C1D24',
            tertiary: '#131419',
            accent: {
              DEFAULT: '#d03d52',
              hover: '#925a2b',
            },
            paragraph: '#878e99',
          },
        },
      },
    plugins: [forms],
};
