import React from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                >
                    Minimal Markdown Editor
                </Menu.Item>
                <Menu.Item
                    name='cheat'
                    onClick={this.props.onClick}
                >
                    Cheatsheet
                </Menu.Item>
                <Menu.Item
                    name='about'
                    onClick={this.props.onClickAbout}
                >
                    About
                </Menu.Item>
            </Menu>

        );
    }
}