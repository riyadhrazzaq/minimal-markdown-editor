import React from 'react';
import './index.css';



export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maximize: false
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({
            maximize: !this.state.maximize
        })
        console.log(this.state.maximize);
    }
    render() {
        const style = {
            border: '1px solid rgba(0,0,0,0.10)',
            minHeight: '86vh',
            maxHeight: '86vh',
            overflowY: 'scroll',
            paddingLeft: '8px',
            minWidth:'100%',
            marginLeft: '1%'
        }
        const styleMax = {
            paddingLeft: '5px',
            border: '1px solid rgba(0,0,0,0.10)',
            minHeight: '94vh',
            maxHeight: '94vh',
            minWidth: '70vw',
            maxWidth: '70vw',
            position: 'absolute',
            top: '9px',
            left: '14%',
            overflowY: 'scroll'

        }
        const modalDialog = {
            width: '100vw',
            height: '100vh',
            margin: '0',
            padding: '0'
        }
        const modalContent = {
            minWidth: '100vw',
            height: 'auto',
            minHeight: '100vh',
            borderRadius: '0'
        }
        return (
            <div>
                <textarea className="w-100" style={style} id="editor" onChange={this.props.onChange} value={this.props.placeholder}></textarea>
            </div>
        );
    }
}