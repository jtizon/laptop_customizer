import React from 'react';


export default function Features(props) {
        return (
            <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
                <Options features={props.features}/>
            </ul>
            </div>)
}
