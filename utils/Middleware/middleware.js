//ye wala fle ko index.js file mai use kro means main source file sab se niche
// it contains four argumnet err, req, res, next

const Errormiddleware = async (err, req, res, next) => {
    err.message = err.message || "Internal server error"  //this error for msg  agar koi problems huwa tho bydefault msg dekhana hai
    err.statusCode = err.statusCode || 500 //this error for statucode ke ke leye agr error aata hai tho bydefault 500 status code dekhana hai 

    if (err.code === 11000) {    // this is for duplicated valued agr same values insert huwa tho ye wala erro ko show karna hai means deuplicated values hai
        err.message = "Duplicated Key Error"
        err.statusCode = 400
    }

    res.status(err.statusCode).json({  //ye wala reponce ke leye hai status and msg ko bhejna hai
        success: false,
        message: err.message
    })

    //jitna bhee errors hai sab ko ham yaha par likh sakte hai as a default
}
export default Errormiddleware