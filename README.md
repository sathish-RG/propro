# PRO Landing Page - Next.js Project

A modern, responsive landing page for PRO - the platform where Projects Meet Professionals.

## Features

- ✨ Responsive design with Tailwind CSS
- 🎨 Beautiful hero section with pattern background
- 💼 Special offers section for clients and freelancers
- 📱 Mobile-friendly layout
- ⚡ Built with Next.js 14
- 🎯 Smooth scrolling and transitions

## Project Structure

```
/app
  ├── layout.jsx       # Root layout
  ├── page.jsx         # Main landing page
  └── globals.css      # Global styles and Tailwind

/public              # Static assets

/node_modules        # Dependencies

package.json         # Project dependencies
tsconfig.json        # TypeScript configuration
tailwind.config.js   # Tailwind CSS configuration
next.config.js       # Next.js configuration
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode
```bash
npm run dev
```
The application will run at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The main PRO red is defined as `pro-red: '#CC0000'`.

### Content
Edit `app/page.jsx` to update text, images, and links.

### Styles
Edit `app/globals.css` to modify global styles and component classes.

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformations

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT
