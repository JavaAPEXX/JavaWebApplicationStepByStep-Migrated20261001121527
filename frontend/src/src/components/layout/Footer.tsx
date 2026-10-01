import React from 'react';

/**
 * Footer component – a lightweight layout partial that preserves the original
 * footer markup while applying the modern CSS design tokens.
 *
 * The component renders a static footer with the legacy content and wraps it
 * in the `.modern-container` class to provide responsive spacing and
 * theming consistent with the rest of the application.
 */
const Footer: React.FC = () => (
  <footer className="footer modern-container">
    <div>footer content</div>
  </footer>
);

export default Footer;