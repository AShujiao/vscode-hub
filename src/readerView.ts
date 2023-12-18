import {
  Uri,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext,
  CancellationToken,
} from 'vscode';
import { configState } from './utils/config';

export default class ReaderViewProvider implements WebviewViewProvider {

  public static readonly viewType = 'manzhuxing.readerView';

  private _view ? : WebviewView;

  constructor(
    private readonly _extensionUri: Uri,
  ) {}

  refresh():void{
    if (this._view) {
      // 重新载入
      this._view.webview.html = "页面刷新中······";
      this._view.webview.html = this.getHtmlForWebview();
    }
  }

  public resolveWebviewView(
    webviewView: WebviewView,
    context: WebviewViewResolveContext,
    _token: CancellationToken,
  ) {
    this._view = webviewView;

    this._view.webview.options = {
      enableScripts: true,
    };

    this._view.webview.html = this.getHtmlForWebview();
  }

  private getHtmlForWebview() {
    const { scale } = configState;
    const width = 95 / scale;
    const height = width;
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
        <title>bbs</title>
        <style>
          html, body, iframe { margin: 0; width: 100%; height: 100%; border: none; overflow: hidden; }
          iframe {
            transform: scale(${scale});
            transform-origin: top left;
          }
        </style>
      </head>
      <body>
        <iframe src="https://vs.20988.xyz" />
      </body>
    </html>`;
  }
}