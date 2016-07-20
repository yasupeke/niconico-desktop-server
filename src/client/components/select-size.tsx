import * as React from 'react';
import { Slider } from 'material-ui';
import { EditorFormatSize } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
}

interface IState {
    size: number;
}

const MIN = 40;
const MAX = 120;
const STEP = 10;
const wrapperStyles = {
    display: 'flex',
    alignItems: 'center'
}

const iconStyles = {
    display: 'block',
    marginRight: '12px',
}

const sliderStyles = {
    flex: 1,
    marginBottom: '-24px'
}

export default class SelectSize extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            size: 80
        }
    }

    private handleChange(e: React.MouseEvent, size: number): void {
        this.setState({
            size
        });
    }

    public getSize(): number {
        return this.state.size;
    }

    public render(): React.ReactElement<void> {
        return (
            <div
                style={wrapperStyles}
            >
                <EditorFormatSize
                    style={iconStyles}
                />
                <Slider
                    min={MIN}
                    max={MAX}
                    step={STEP}
                    defaultValue={this.state.size}
                    onChange={this.handleChange.bind(this)}
                    style={sliderStyles}
                />
            </div>
        );
    }

}