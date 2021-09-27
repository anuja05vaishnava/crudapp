/* eslint-disable no-undef */

// eslint-disable-next-line func-names
exports.product_create = function (req, res) {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  // eslint-disable-next-line consistent-return
  product.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully');
  });
};

// eslint-disable-next-line func-names
exports.product_details = function (req, res) {
  // eslint-disable-next-line consistent-return
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

// eslint-disable-next-line func-names
exports.product_update = function (req, res) {
  // eslint-disable-next-line consistent-return
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) return next(err);
    res.send('Product udpated.');
  });
};

// eslint-disable-next-line func-names
exports.product_delete = function (req, res) {
  // eslint-disable-next-line consistent-return
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
