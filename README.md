# node-red-contrib-barcode

Node-RED node with [Dynamsoft Barcode Reader](https://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx) for Windows.

## Install

```
sudo npm install -g --unsafe-perm node-red
cd %userprofile%\.node-red
npm install node-red-contrib-barcode
```

## Usage
If the default port `1880` cannot work, change it to `18800` in `%userprofile%\.node-red\settings.js`.

Start `Node RED`:

```
node-red
```

In web editor, add `inject node`, `file node`, `barcode node` and `debug node`. You can set the image path in `file node`.

![Node RED barcode](https://www.codepool.biz/wp-content/uploads/2018/11/node-red-debug.PNG)

![Node RED barcode results](https://www.codepool.biz/wp-content/uploads/2018/11/node-red-barcode-results.PNG)
