
//default catchAsync 
//ye wala file ko every controller file api mei use kro as a  async (means async ke roop mai)

export const asyncCatch = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next))
        .catch(next)
}