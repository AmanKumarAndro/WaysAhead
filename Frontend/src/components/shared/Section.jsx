const Section = ({ 
  children, 
  className = '', 
  bgLight = 'bg-white', 
  bgDark = 'dark:bg-gray-900' 
}) => {
  return (
    <section className={`py-20 transition-colors duration-300 ${bgLight} ${bgDark} ${className}`}>
      {children}
    </section>
  )
}

export default Section 