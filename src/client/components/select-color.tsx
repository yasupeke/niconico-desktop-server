import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import { ActionInvertColors } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
    disabled: boolean;
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

    public getColor(): { color: string, shadowColor: string } {
        const group = this.refs['selectColor'] as RadioButtonGroup;
        const colors = group.getSelectedValue().split(',');
        return {
            color: colors[0],
            shadowColor: colors[1]
        };
    }

    public render(): React.ReactElement<void> {
        return (
            <RadioButtonGroup
                ref="selectColor"
                name="color"
                defaultSelected="#000000,#ffffff"
                style={wrapperStyles}
            >
                <RadioButton
                    value="#000000,#ffffff"
                    label="Black"
                    style={radioStyles}
                    disabled={this.props.disabled}
                />
                <RadioButton
                    value="#ff0000,#ffffff"
                    label="Red"
                    style={radioStyles}
                    disabled={this.props.disabled}
                />
                <RadioButton
                    value="#ffffff,#000000"
                    label="White"
                    style={radioStyles}
                    disabled={this.props.disabled}
                />
            </RadioButtonGroup>
        );
    }
}