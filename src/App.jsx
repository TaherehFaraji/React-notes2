import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import AutoResetCounter from './AutoResetCounter';
import RandomUsers from './RandomUsers';
import TypingIndicator from './TypingIndicator';
import FocusInput from './FocusInput';
import GitHubFinder from './GitHubFinder';
import Posts from './Posts';

function App() {
  const [showAlert, setShowAlert] = useState(null);

  return (
    <>
      {/* <div className='container'>
        <button onClick={() => { setShowAlert("success") }}>Success Alert</button>
        {showAlert === "success" && (
          <Alert type="success"
            title="موفق شدید!"
            message="عملیات با موفقیت انجام شد"
            onClose={() => { setShowAlert(null) }} />
        )}

        <button onClick={() => { setShowAlert("error") }}>Error Alert</button>
        {showAlert === "error" && (
          <Alert type="error"
            title="خطا!"
            message="خطایی رخ داد.لطفا دوباره تلاش کنید"
            onClose={() => { setShowAlert(null) }} />
        )}

        <button onClick={() => { setShowAlert("warning") }}>Warning Alert</button>
        {showAlert === "warning" && (
          <Alert type="warning"
            title="هشدار!"
            message="لطفاً اطلاعات واردشده را بررسی کنید"
            onClose={() => { setShowAlert(null) }} />
        )}
      </div> */}
      {/* <AutoResetCounter />
      <RandomUsers /> 
       <TypingIndicator />
      <FocusInput />
      <GitHubFinder /> */}
      <Posts />
    </>
  )

}

export default App

//////////////////////////////
// import { useState } from 'react'
// import ThemeContext from './ThemeContext'
// import Toolbar from './Toolbar'

// function App() {
//   const [theme, setTheme] = useState('light')

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div>
//         <h1>Current theme: {theme}</h1>
//         <Toolbar />
//       </div>
//     </ThemeContext.Provider>
//   )
// }
// export default App

//////////////////////////////////

// import { useState } from 'react'
// import LanguageContext from './LanguageContext'
// import Navbar from './Navbar'
// import Greeting from './Greeting'
// import Farewell from './Farewell'

// function App() {
//   const [language, setLanguage] = useState('en')

//   const toggleLanguage = () => {
//     setLanguage(prev => (prev === 'en' ? 'es' : 'en'))
//   }

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       <Navbar />
//       <Greeting />
//       <Farewell />
//     </LanguageContext.Provider>
//   )
// }
// export default App