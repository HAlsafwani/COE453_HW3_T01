exports.mul = (req, res) => {
    const { X, Y } = req.query;

    const result = X * Y;

    res.json({X: X, Y: Y, Result: result});
};
