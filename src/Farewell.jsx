import { useContext } from 'react'
import LanguageContext from './LanguageContext'

function Farewell() {
  const { language } = useContext(LanguageContext)
  return <p>{language === 'en' ? 'Goodbye' : 'Adiós'}</p>
}
export default Farewell