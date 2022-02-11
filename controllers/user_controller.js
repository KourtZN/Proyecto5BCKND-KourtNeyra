const mongoose = require('mongoose')
const User = mongoose.model('User')

const createUser = async (req,res) => {
    try{
        const users = await User.find();
        if (users.length === 0){
            return res.status(400).json({
                message: 'Error',
                detail: 'No hay usuario'
            });
        }

        return res.status(200).json({
            message: 'Ok',
            detail: users
        });

    } catch(err){
        return res.status(400).json({
            message: 'Error',
            detail: err
        });
    }

}

const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        if (users.length === 0){
            return res.status(400).json({
                message: 'Error',
                detail: 'No hay usuario'
            });
        }

        return res.status(200).json({
            message: 'Ok',
            detail: users
        });
    

    } catch(err){
        return res.status(400).json({
            message: 'Error',
            detail: err
        });
    }

}

module.exports = {
    getUsers,
    createUser
}