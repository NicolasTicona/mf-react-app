const whiteListBootstrap = ['http://localhost:3000', 'http://127.0.0.1:8080', 'https://mf-react-app-dev.vercel.app'];

export const isBootstrap = whiteListBootstrap.includes(window.location.origin);