function errorHandler(err, req, res, next){
    if(err.name === 'UnauthorizedError'){
        //jwt authentication error
      return res.status(401).json({message: 'The user is not recognised'})
    }

    if(err.name === 'ValidationError'){
        // validation error
        return res.status(401).json({message: err})
    }
    // Default to 500 internal server error
    return res.status(500).json(err);
}

module.exports = errorHandler