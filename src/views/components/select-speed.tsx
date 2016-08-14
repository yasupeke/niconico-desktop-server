import * as React from 'react';
import { Slider } from 'material-ui';
import { AvFastForward } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
    disabled: boolean;
}

interface IState {
    speed: number;
}

const MIN = 0;
const MAX = 10000;
const STEP = 1000;
const MAX_SPEED = 15000;
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

export default class SelectSpeed extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            speed: 5000
        }
    }

    private handleChange(e: React.MouseEvent, speed: number): void {
        this.setState({
            speed
        });
    }

    public getSpeed(): number {
        return MAX_SPEED - this.state.speed;
    }

    public render(): React.ReactElement<void> {
        return (
            <div
                style={wrapperStyles}
            >
                <AvFastForward
                    style={iconStyles}
                />
                <Slider
                    min={MIN}
                    max={MAX}
                    step={STEP}
                    defaultValue={this.state.speed}
                    onChange={this.handleChange.bind(this)}
                    style={sliderStyles}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }

}