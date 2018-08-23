import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.jsx';
import Preview from './preview.jsx';
import Navbar from './navbar.jsx';
import './index.css';
import {Modal, Grid,Button,Icon } from 'semantic-ui-react'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            hint: false,
            about:false,
            maximize:false
        }
        this.onChange = this.onChange.bind(this);
        this.handleHint = this.handleHint.bind(this);
        this.handleAbout = this.handleAbout.bind(this);
        this.handleEditor = this.handleEditor.bind(this);
    }
    onChange(e) {
        this.setState({
            input: e.target.value,
        })
    }
    handleHint() {
        this.setState({
            hint: !this.state.hint
        })
    }
    handleAbout() {
        this.setState({
            about: !this.state.about
        })
    }
    handleEditor() {
        this.setState({
            maximize: !this.state.maximize
        })
    }
    render() {
        const fullBtn={
            color:'grey',
            cursor:'pointer',
            display:'inline',
            marginLeft:'88%'
        }
        const style = {
            border: '1px solid rgba(0,0,0,0.10)',
            minHeight: '86vh',
            maxHeight: '86vh',
            overflowY: 'scroll',
            paddingLeft: '8px',
            minWidth: '100%',
            marginLeft: '1%'
        }
        return (
            <div>
                <Navbar onClick={this.handleHint} onClickAbout={this.handleAbout} />
                <div id="footer"></div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <h5 style={{marginLeft:'1%',display:'inline-block'}}>Editor</h5>
                            <p onClick={this.handleEditor} style={fullBtn}><Icon name="expand" size="large"/></p>
                            <Editor placeholder={this.state.input} onChange={this.onChange} input={this.state.input} />
                        </Grid.Column>
                        <Grid.Column>
                            <h5 id="previewLabel">Preview</h5>
                            <Preview input={this.state.input} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Modal open={this.state.hint}>
                    <Modal.Header><p id="closeHint" onClick={this.handleHint}>close</p></Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <pre>{hintText}</pre>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <Modal open={this.state.about}>
                    <Modal.Header><p id="closeHint" onClick={this.handleAbout}>close</p></Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            Developed by Riyadh Razzaq <hr></hr>
                            Source: <a href="https://github.com/riyadhrazzaq/markdown-syntax" target="_blank">Github</a><br></br>
                            License: MIT
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <Modal open={this.state.maximize}>
                    <Modal.Content>
                        <Button style={{float:'right',paddingRight:'12px'}} onClick={this.handleEditor}><Icon name="close"/></Button>
                        <textarea style={style} id="editor" onChange={this.onChange} value={this.state.input}></textarea>
                    </Modal.Content>
                </Modal>
            </div>

        );
    }
}
const hintText = `# H1
## H2
### H3
#### H4
##### H5
###### H6
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
* Unordered list can use asterisks
- Or minuses
+ Or pluses
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
Inline \`code\` has \`back-ticks around\` it.
Blocks of code are either fenced by lines with three back-ticks \`\`\`, 
or are indented with four spaces. I recommend only using the fenced code blocks -- 
they're easier and only they support syntax highlighting.

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
`
ReactDOM.render(<App />, document.body);
