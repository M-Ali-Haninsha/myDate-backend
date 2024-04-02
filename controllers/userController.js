
const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt");

const bcryptPassword = async (password) => {
    try {
      const hashpassword = await bcrypt.hash(password, 10);
      return hashpassword;
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

const userSignup = async(req, res) => {
    try {
        const check = await userModel.exists({email: req.body.email})
        if(check) {
            res.status(200).json({exists: true})
        } else {
            const { userName, email, password } = req.body
            const hashpassword = await bcryptPassword(password);
            const user = {
                userName: userName,
                email: email,
                password: hashpassword,
                firstTime: true
            }
            await userModel.insertMany([user]);
            res.status(200).json({success: 'created'})
        }        
    } catch (error) {
        res.status(500).json(error)
    }
}

const userLogin = async(req, res) => {
    try {
        console.log('logged');
        const user = await userModel.findOne({email: req.body.email})
        if(user) {
            const passwordMatched = await bcrypt.compare(req.body.password, user.password)
            if(passwordMatched) {
                
            }
        }
        res.status(200).json('loginSuccess')
    } catch(error) {
        res.status(500).json()
    }
}

module.exports = {
    userSignup,
    userLogin
}