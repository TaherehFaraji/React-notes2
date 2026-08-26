import './Alert.css';

function Alert({ type, title, message, onClose }) {
    return (
        <>
            <div className={`alert alert-${type}`}>
                <strong>{title}</strong>
                <p>{message}</p>
                <button onClick={onClose}>×</button>
            </div>
        </>
    )
}

export default Alert