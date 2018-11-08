module.exports = function(RED) {
  var dbr = require('dbr');
  var barcodeTypes = 0x3FF | 0x2000000 | 0x4000000 | 0x8000000 | 0x10000000; // 1D, PDF417, QRCODE, DataMatrix, Aztec Code

  function BarcodeNode(config) {
    RED.nodes.createNode(this, config);
    this.license = config.license;
    this.template = config.template;
    var node = this;
    node.on('input', function(msg) {
      if (msg.filename) {
        dbr.initLicense(node.license);
        dbr.decodeFileAsync(msg.filename, barcodeTypes, function(err, results) {
          msg.payload = results;
          node.send(msg);
        }, node.template);
      } else {
        msg.payload = msg.payload.toLowerCase();
        node.send(msg);
      }
    });
  }
  RED.nodes.registerType('barcode', BarcodeNode);
}