import React from 'react';
import {Group, Line} from 'react-konva';
import BasicGateway from './BasicGateway';
export default class ComplexGateway extends BasicGateway {
    _renderIcon() {
        const {radius, iconLineWidth, padding} = this.state;
        let xMin,
            yMin,
            xMax,
            yMax,
            max;
        xMin = yMin = radius / 2 + Math.sqrt(padding);
        xMax = yMax = radius * 1.5 - Math.sqrt(padding);
        max = radius * 2 - padding;
        const verticalLinePoints = [padding, radius, max, radius];
        const horizontalLinePoints = [radius, padding, radius, max];
        const leftLinePoints = [xMin, yMin, xMax, yMax];
        const rightLinePoints = [xMax, yMin, xMin, yMax];
        return (
            <Group>
                <Line points={horizontalLinePoints} stroke="#000" strokeWidth={iconLineWidth}></Line>
                <Line points={verticalLinePoints} stroke="#000" strokeWidth={iconLineWidth}></Line>
                <Line points={leftLinePoints} stroke="#000" strokeWidth={iconLineWidth}></Line>
                <Line points={rightLinePoints} stroke="#000" strokeWidth={iconLineWidth}></Line>
            </Group>
        )
    }
    _setPrevElement(connector) {
        this.state.prevElements.push(connector);
    }
    _removePrevElement(connector, index, elements) {
        elements.splice(index, 1);
        this.state.prevElements = elements;
    }
    componentWillMount() {
        super.componentWillMount();
        this.state.typeName = 'ComplexGateway';
    }
}
