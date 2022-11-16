require('dotenv').config()

module.exports= {
    devlog: (...args) => {
        if (process.env.MODE === "dev") {
            console.log(args)
        }
    }
} 