import { useContext } from 'react'
import LanguageContext from './LanguageContext'

function Greeting() {
  const { language } = useContext(LanguageContext)
  return <h2>{language === 'en' ? 'Hello' : 'Hola'}</h2>
}
export default Greeting