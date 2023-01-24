class dev {
    error(e) {
        if (process.env.REACT_APP_MODE === 'dev') {
            throw new Error(e)
        } else {
            console.error('dev error', e)
        }
    }

    log(...args) {
        if (process.env.REACT_APP_MODE === 'dev') {
            (args.length === 1) ? console.log(args[0]) : console.log.apply(console, args)
        }
    }

    verbose(...args) {
        if (process.env.REACT_APP_MODE === 'dev' && process.env.REACT_APP_VERBOSE===1) {
            (args.length === 1) ? console.log(args[0]) : console.log.apply(console, args)
        }
    }
}
export default new dev()