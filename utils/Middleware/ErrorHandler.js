//ye wala file ko error ke roop mai use kro every controller file mai
// return mai next(new ErrroHandlet("User is Already Exist"))  aaisa agr condition satisfied nahi hota tab 

class ErroHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}
export default ErroHandler