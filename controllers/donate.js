/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('donate', {
    title: 'Donate'
  });
};

exports.done = (req, res) => {
  res.render('donate-done', {
    title: 'Thank You'
  });
};
