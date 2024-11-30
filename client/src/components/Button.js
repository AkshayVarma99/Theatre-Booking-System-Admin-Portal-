import React from 'react';
import classnames from 'classnames'; // Import for cleaner class manipulation

// Enhanced Button component with improved styling and flexibility
const Button = ({
  title,
  onClick,
  variant = 'primary', // Set default variant for clarity
  disabled = false,
  fullWidth = false,
  type = 'button',
  size = 'md', // Add size prop for customization
  children, // Allow for optional child elements
  refreshPage = false, // Prop to enable page refresh
}) => {
  const baseClasses = 'rounded-md shadow-sm py-2 px-4'; // Define common base classes
  const buttonClasses = classnames(
    baseClasses,
    {
      'bg-primary text-white': variant === 'primary', // Primary button style
      'border border-primary text-primary bg-white': variant === 'outlined', // Outlined button style
      'border border-primary text-primary bg-white p-3': variant === 'cancelSearch', // Cancel search style
      'text-xs leading-3': size === 'sm', // Small size styling
      'text-base leading-4': size === 'md', // Medium size (default)
      'text-lg leading-5': size === 'lg', // Large size styling
      'w-full': fullWidth, // Full-width styling
    },
    disabled && 'opacity-50 cursor-not-allowed' // Apply disabled styles
  );

  const handleClick = () => {
    if (refreshPage) {
      window.location.reload(); // Refresh the page
    }
    if (onClick) {
      onClick(); // Call the onClick function if provided
    }
  };

  return (
    <button className={buttonClasses} type={type} onClick={handleClick} disabled={disabled}>
      {children || title} {/* Render title or provided children */}
    </button>
  );
};

export default Button;
