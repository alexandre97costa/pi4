
class dev {
    error(e) {
        if (process.env.MODE === 'dev') {
            throw new Error(e)
        } else {
            console.error('dev error', e)
        }
    }

    log(...args) {
        if (process.env.MODE === 'dev') {
            (args.length === 1) ? console.log(args[0]) : console.log(args)
        }
    }

    verbose(...args) {
        if (process.env.MODE === 'dev' && process.env.VERBOSE===1) {
            (args.length === 1) ? console.log(args[0]) : console.log(args)
        }
    }
}
module.exports = { dev }