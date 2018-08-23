import React from 'react';


export default class Toolbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style= {
            cursor: 'pointer'
        }
        const styleParent= {
          
        }
        return(
            <div style={styleParent}>
                <h5 style={{paddingLeft:'5px'}}>Editor</h5>
              {/*  <a style={style} onClick={this.props.onClick}>Fullscreen</a> */}

            </div> 
        );
    }
}