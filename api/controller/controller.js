

const login = async(req, res)=>{
    const {username, password} = req.body;
    res.json({requestedData : {username, password}})
    
}
const register = async(req, res)=>{
    const {username, password} = req.body;
    res.json({requestedData : {username, password}})
}

const home = async(req, res)=>{
    res.status(200).json({"msg" : "Blog App by Tosh"})
}

const test = (req, res)=>{
    res.status(200).json({"test" : "Testing the Blog App"})
}
module.exports = {login,register, home, test}