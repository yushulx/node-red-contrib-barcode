# node-red-contrib-barcode

Node-RED node with [Dynamsoft Barcode Reader](https://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx) for Windows.

## Install

```
sudo npm install -g --unsafe-perm node-red
cd %userprofile%\.node-red
npm install node-red-contrib-barcode
```

## SDK License
Get the [free trial license](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx).

For example:
```
t0068NQAAACqUjZa21C+W7fRdPkf2FRFRr+QpfVC2tDsl/8t25TzYCNxl5s0OkuwFgEMGNfN95Z0HYQ55ROi1px9JqVAP7/c=
```

## Usage
If the default port `1880` cannot work, change it to `18800` in `%userprofile%\.node-red\settings.js`.

Start `Node RED`:

```
node-red
```

In web editor, add `inject node`, `file node`, `barcode node` and `debug node`. You can set the image path in `file node`.

![Node RED barcode](https://www.codepool.biz/wp-content/uploads/2018/11/node-red-debug.PNG)

Click barcode node to set a valid license and barcode parameter template:

![Barcode license](https://www.codepool.biz/wp-content/uploads/2018/11/node-red-barcode-license.PNG)

Here is an example of [template](https://www.dynamsoft.com/help/Barcode-Reader/devguide/Template/ImageParameters/BarcodeFormatIds.html):

```json
{
  "ImageParameter": {
    "Name": "Custom_143301_827",
    "BarcodeFormatIds": [
      "OneD"
    ]
  }
}
```
**If you do not set a template, the default template will be used.**

Run the app:

![Node RED barcode results](https://www.codepool.biz/wp-content/uploads/2018/11/node-red-barcode-results.PNG)
