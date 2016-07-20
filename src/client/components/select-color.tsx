import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import { ActionInvertColors } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
}

const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '32px'
}

const radioStyles = {
    width: 'auto'
}

export default class SelectColor extends React.Component<IProps, void> {
    constructor(props: IProps) {
        super(props);
    }

    public getColor(): string {
        const group = this.refs['selectColor'] as RadioButtonGroup;
        return group.getSelectedValue();
    }

    public render(): React.ReactElement<void> {
        return (
            <RadioButtonGroup
                ref="selectColor"
                name="color"
                defaultSelected="#000000"
                style={wrapperStyles}
            >
                <RadioButton
                    value="#000000"
                    label="Black"
                    style={radioStyles}
                />
                <RadioButton
                    value="#ff0000"
                    label="Red"
                    style={radioStyles}
                />
            </RadioButtonGroup>
        );
    }
}