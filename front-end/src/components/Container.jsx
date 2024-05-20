import './Container.css'

export default function Container(props)  {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
            </div>
        </div>
    </div>
    )
    
        
}