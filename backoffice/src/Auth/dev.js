
class dev {
    error(e) {
        if (process.env.REACT_APP_MODE === 'dev') {
            throw new Error(e)
        } else {
            console.error(e)
        }
    }

    log(...args) {
        if (process.env.REACT_APP_MODE === 'dev') {
            
            (args.length === 1) ? console.log(args[0]) : console.log(args)
        }
    }
}
export default new dev()