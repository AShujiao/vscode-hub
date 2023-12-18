// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
	window,
	ExtensionContext,
	commands,
  } from 'vscode';
  import ReaderViewProvider from './readerView';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
let proxy: any;
export function activate(context: ExtensionContext) {
	const readerViewProvider = new ReaderViewProvider(context.extensionUri);
	window.registerWebviewViewProvider('manzhuxing.readerView', readerViewProvider, {
	  webviewOptions: {
		retainContextWhenHidden: true,
	  },
	});
	commands.registerCommand('manzhuxing.refreshEntry',() => readerViewProvider.refresh());
}

// This method is called when your extension is deactivated
export function deactivate() {
}
