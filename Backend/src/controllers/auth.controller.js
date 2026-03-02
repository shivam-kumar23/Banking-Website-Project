const userModel = require('../model/model')

async function createAccount(req,res){
    
//     try {
//         const {name,email,password} = req.body
//         console.log(req.body)

//         const user = await userModel.create({
//             name,email,password
//         })

//         res.status(201).json({
//             success : true,
//             message : "Account created successfully",
//             data : user
//         })
        
//     } catch (error) {
//         res.status(500).json({
//             success : false,
//             message : "Failed to create account",
//             error : error.message
//         })
//     }
// }
try {
    const { name, email, password } = req.body;

    const user = await userModel.create({
        name,
        email,
        password
    });

    res.status(201).json({
        success: true,
        message: "Account created successfully",
        data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password 
        }
    });

} catch (error) {
    res.status(500).json({
        success: false,
        message: "Failed to create account"
    });
}
}

module.exports = {createAccount}

