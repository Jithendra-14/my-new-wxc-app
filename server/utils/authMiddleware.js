
// custom middleware to check auth state
function isAuthenticated(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.redirect('/api/auth/signin'); // redirect to sign-in route
    }
    if (!req.session.accessToken) {
        return res.redirect('/api/auth/acquireToken');
    }

    next();
};

module.exports = {
    isAuthenticated
}