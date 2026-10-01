import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * HeaderPartial
 *
 * This component mirrors the legacy header.jspf fragment.
 * It sets the page title, includes the Bootstrap CSS, and
 * injects the original footer style. No state or event
 * handlers are added, preserving the original behavior.
 */
const HeaderPartial: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Todos</title>
        <link
          href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <style>{`
          .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            background-color: #f5f5f5;
          }
        `}</style>
      </Helmet>
    </>
  );
};

export default HeaderPartial;