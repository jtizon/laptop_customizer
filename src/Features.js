import React, { Component } from 'react';




class Features extends Component{
    render(){
        return(
            Object.keys(this.props.features).map(key => 
                {
                    return (
                        <div className="feature" key={key}>
                            <div className="feature__name">{key}</div>
                            <ul className="feature__list">
                            <Options
                        key={key}
                        />
                            </ul>
                        </div>
                    )
          })   
        )
    }
}

export default Features;