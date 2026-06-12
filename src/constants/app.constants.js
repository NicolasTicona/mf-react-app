const whiteListBootstrap = ['http://localhost:3000', 'http://127.0.0.1:8080'];

export const isBootstrap =
    whiteListBootstrap.includes(window.location.origin) ||
    window.location.pathname.startsWith('/mf-react-app');