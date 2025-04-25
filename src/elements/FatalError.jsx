import './FatalError.css';

function FatalError(props) {
    return (
        <>
            <div className="fullshadow"></div>
            <div 
                id="fatalError">
                <h1>Fatal Error</h1>
                <p>Ha ocurrido un error interno en la aplicación</p>
                <p>Codigo de error: { props.code }</p>
            </div>
        </>
    )
}

export default FatalError;