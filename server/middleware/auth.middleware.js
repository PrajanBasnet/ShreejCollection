
export const isAuthenticated = (req, res, next) => {
    if (req.session.email) {
        next();
    } else {
        res.status(401).send("Need to Authenticated first to get the access");
    }
}
