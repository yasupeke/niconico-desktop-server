import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

export function renderDocument(reactElement: React.ReactElement<any>): string {
    return `<!DOCTYPE html>${ReactDomServer.renderToString(reactElement)}`;
}

export function renderStaticDocument(reactElement: React.ReactElement<any>): string {
    return `<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(reactElement)}`;
}
