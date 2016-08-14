import * as React from 'react'
import Layout from './shared/layout';

interface IProps extends React.Props<void> {
    message: string;
    status: string;
    stack: string;
}

export default class Index extends React.Component<IProps, void> {
    constructor(props: IProps) {
        super(props);
    }

    public render(): React.ReactElement<void> {
        return (
            <Layout>
                <h1>{this.props.message}</h1>
                <h2>{this.props.status}</h2>
                <pre>{this.props.stack}</pre>
            </Layout>
        );
    }
}
