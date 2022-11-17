
class dev {
    error(e) {
        if (process.env.MODE === 'dev') {
            throw new Error(e)
        } else {
            console.error(e)
        }
    }

    log(...args) {
        if (process.env.MODE === 'dev') {
            
            (args.length === 1) ? console.log(args[0]) : console.log(args)
        }
    }
}
module.exports = { dev }