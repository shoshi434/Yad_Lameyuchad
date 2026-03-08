const SUPER_ADMIN_EMAIL = 'yadlameyuchad.site@gmail.com';

const verifySuperAdmin = (req, res, next) => {
    if (!req.user || !req.user.email) {
        return res.status(401).json({ message: "Unauthorized - No user found" });
    }

    if (req.user.email !== SUPER_ADMIN_EMAIL) {
        return res.status(403).json({ 
            message: "Forbidden - Only super admin can manage other admins" 
        });
    }

    next();
};

module.exports = verifySuperAdmin;
