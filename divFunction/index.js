exports.div = (req, res) => {
    const { X, Y } = req.query;

    if (Y === 0) {
        return res.status(400).send('Error: Cannot divide by zero.');}

    const result = X / Y;

    res.json({X: X, Y: Y, Result: result});
};
