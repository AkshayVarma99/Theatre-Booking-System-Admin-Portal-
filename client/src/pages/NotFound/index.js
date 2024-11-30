import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404: Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <p>
        Go back to <a href="/">home</a> or <a href="/login">login</a>.
      </p>
    </div>
  );
};

export default NotFound;
