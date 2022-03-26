


const authMiddleware = (router) => {
    router.use((req, res, next) => {
        
        next()
    })
}

module.exports = authMiddleware;



