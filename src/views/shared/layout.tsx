import * as React from 'react';

interface IProps extends React.Props<void> {
    stylePaths?: string[];
    preScriptPaths?: string[];
    scriptPaths?: string[];
}

export default class Layout extends React.Component<IProps, void> {
    private styles: JSX.Element[];
    private preScripts: JSX.Element[];
    private scripts: JSX.Element[];
    constructor(props: IProps) {
        super(props);
        if (props.stylePaths) {
            this.styles = this.props.stylePaths.map((path: string) => {
                return <link type="text/css" src={path} />;
            });
        }
        if (props.preScriptPaths) {
            this.preScripts = this.props.preScriptPaths.map((path: string) => {
                return <script type="text/javascript" src={path} />;
            });
        }
        if (props.scriptPaths) {
            this.scripts = this.props.scriptPaths.map((path: string) => {
                return <script type="text/javascript" src={path} />;
            });
        }
    }

    public render(): React.ReactElement<void> {
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width" />
                    <title>Comment</title>
                    {this.styles}
                    {this.preScripts}
                </head>
                <body>
                    {this.props.children}
                    {this.scripts}
                </body>
            </html>
        );
    }
}
