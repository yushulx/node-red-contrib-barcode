module.exports = function(RED) {
  var dbr = require('dbr');
  dbr.initLicense(
      't0068NQAAACqUjZa21C+W7fRdPkf2FRFRr+QpfVC2tDsl/8t25TzYCNxl5s0OkuwFgEMGNfN95Z0HYQ55ROi1px9JqVAP7/c=');
  var barcodeTypes = 0x3FF | 0x2000000 | 0x4000000 | 0x8000000 | 0x10000000; // 1D, PDF417, QRCODE, DataMatrix, Aztec Code

  function BarcodeNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      if (msg.filename) {
        dbr.decodeFileAsync(msg.filename, barcodeTypes, function(err, results) {
          msg.payload = results;
          node.send(msg);
        }, '');
      } else {
        msg.payload = msg.payload.toLowerCase();
        node.send(msg);
      }
    });
  }
  RED.nodes.registerType('barcode', BarcodeNode);
}