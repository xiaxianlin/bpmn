import React from 'react';
import BasicConnector from './BasicConnector';
export default class SimpleConnector extends BasicConnector {
    static defaultProps = {
        x: 30,
        y: 30,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#000',
        pointerWidth: 8,
        pointerLength: 10,
        draggable: true
    }
    componentWillMount() {
        super.componentWillMount();
        this.state.typeName = 'SimpleConnector';
    }
}
