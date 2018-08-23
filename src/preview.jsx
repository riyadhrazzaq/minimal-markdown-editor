import React from 'react';
import marked from 'marked';


marked.setOptions({
    breaks:true,
    gfm:true,
    smartLists:true,
    smartypants:true
});

export default class Editor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
            minHeight:'86vh',
            overflowY: 'scroll',
            maxHeight:'86vh',
            border:'none',
            paddingLeft:'8px',
        }
        return(
                <div style={{border:'1px solid rgba(0,0,0,0.10)'}}>
                    <div id="preview" style={style} dangerouslySetInnerHTML={{ __html: marked(this.props.input)}}></div>
                </div>
        );
    }
}