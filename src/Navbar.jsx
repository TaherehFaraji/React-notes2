
import { useContext } from 'react'
import LanguageContext from './LanguageContext'

function Navbar() {
  const { toggleLanguage, language } = useContext(LanguageContext)
  return (
    <nav>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'Español' : 'English'}
      </button>
    </nav>
  )
}
export default Navbar
