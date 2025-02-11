const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white',
    secondary: 'bg-transparent border-2 border-white hover:bg-white/10 text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10'
  }

  return (
    <button 
      className={`px-8 py-3 rounded-full transition-colors font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 