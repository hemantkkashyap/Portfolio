module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths as per your project structure
    ],
    theme: {
      extend: {
        boxShadow: {
            'custom-shadow': '0px 0px 29px 12px rgba(34, 34, 34, 0.5)', // Custom shadow 1
            'shadow-1': '0px 4px 15px rgba(0, 0, 0, 0.1)', // Light shadow
            'shadow-2': '0px 0px 25px 15px rgba(0, 0, 0, 0.2)', // Soft shadow
            'shadow-3': '0px 0px 30px 20px rgba(0, 0, 0, 0.3)', // Medium shadow
            'shadow-4': '0px 0px 40px 25px rgba(0, 0, 0, 0.4)', // Heavy shadow
            'hover-shadow': '0px 4px 20px rgba(0, 0, 0, 0.25)', // Hover effect
          },
          animation: {
            'fade-in': 'fadeIn 1s ease-out', // Fade-in animation
            'scale-up': 'scaleUp 0.5s ease-in-out', // Scale-up animation
            'bounce-in': 'bounceIn 1s ease-in-out', // Bounce-in animation
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            scaleUp: {
              '0%': { transform: 'scale(0.8)' },
              '100%': { transform: 'scale(1)' },
            },
            bounceIn: {
              '0%': { transform: 'scale(0.5)' },
              '50%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
          },
      },
    },
    plugins: [],
  }
  