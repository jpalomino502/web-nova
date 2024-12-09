import { useEffect, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 opacity-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}>
        <div className="space-y-6">
          <h3 className="text-sm font-medium tracking-wider mb-4">SERVICIOS</h3>
          <ul className="space-y-3">
            {['Diseño Web', 'Desarrollo Web', 'SEO', 'Marketing Digital', 'Gestión de Marcas'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-medium tracking-wider mb-4">CONTACTO</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="mailto:webnova@webnova.com.co" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Email
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/1234567890" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-medium tracking-wider mb-4">SÍGUENOS</h3>
          <ul className="space-y-3">
            {[ 
              { name: 'Instagram', href: 'https://co.linkedin.com/company/webnova-co' },
              { name: 'LinkedIn', href: 'https://www.instagram.com/webnova_co/' }
            ].map((social) => (
              <li key={social.name}>
                <a 
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    {social.name}
                  </span>
                  <svg 
                    className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}>
        <div>
          <h4 className="text-sm font-medium mb-2">WEBNOVA</h4>
        </div>
      </div>
    </footer>
  )
}
