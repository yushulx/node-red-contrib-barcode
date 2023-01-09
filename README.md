# node-red-contrib-barcode

Node-RED node for reading barcode and QR code.

## Install Node RED

```
npm install -g --unsafe-perm node-red
```

## SDK License
Get the [free trial license](https://www.dynamsoft.com/barcode-reader/docs/core/parameters/structure-and-interfaces-of-parameters.html?ver=latest).


## Usage
If the default port `1880` cannot work, change it to `18800` in `%userprofile%\.node-red\settings.js`.

Start `Node RED`:

```
cd %userprofile%\.node-red
npm install node-red-contrib-barcode
node-red
```

In web editor, add `inject node`, `file node`, `barcode node` and `debug node`. You can set the file path in `file node`. The file could be an image file (png, jpg, bmp, gif, tiff, pdf) or a file containing a base64 string.

![Node RED barcode](https://www.dynamsoft.com/codepool/img/2018/11/node-red-debug.PNG)

Click barcode node to set a valid license and barcode [parameter template](https://www.dynamsoft.com/barcode-reader/docs/core/parameters/structure-and-interfaces-of-parameters.html?ver=latest):

![Barcode license](https://www.dynamsoft.com/codepool/img/2018/11/node-red-barcode-license.PNG)

**If the template is empty, the default template will be used.**


Run the app:

![Node RED barcode results](https://www.dynamsoft.com/codepool/img/2018/11/node-red-barcode-results.PNG)

## Blog
[How to Use Node RED with Barcode Module on Windows 10](https://www.dynamsoft.com/codepool/node-red-barcode-windows.html)
