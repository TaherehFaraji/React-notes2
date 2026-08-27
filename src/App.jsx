import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import AutoResetCounter from './AutoResetCounter';
import RandomUsers from './RandomUsers';
import TypingIndicator from './TypingIndicator';
import FocusInput from './FocusInput';

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
      <RandomUsers /> */}
      {/* <TypingIndicator /> */}
      <FocusInput />
    </>
  )

}

export default App
