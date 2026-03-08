const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5500',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://yad-lameyuchad.onrender.com'
]

// Add production URL if exists
if (process.env.CLIENT_URL) {
    allowedOrigins.push(process.env.CLIENT_URL)
}

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 