import * as React from 'react'
import Layout from './shared/layout';
import Input from './containers/input';

export default class Index extends React.Component<void, void> {
    constructor() {
        super();
    }

    public render(): React.ReactElement<void> {
        return (
            <Layout
                scriptPaths={['bundle.js']}
            >
                <div id="comment"></div>
            </Layout>
        );
    }
}
