
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>THis is private info. Please don't share!</p>}
            <WarppedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WarppedComponent)=>{
    return (props)=>(
        <div>
            {
                props.isAuthenticated ? 
                (<WarppedComponent {...props} />) :
                (<p>Please login in!</p> )
            }
            
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details" />, document.getElementById('app'));