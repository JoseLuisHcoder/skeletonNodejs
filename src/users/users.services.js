const userControllers = require('./users,controllers')

// todas las personas vana poder hacer un get y un post el delete y update van a estar restringidos

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message; 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getMyuser = (req, res) => {
    const id = req.user.id
    userControllers.findUserById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postUser = (req, res) => {
    const {firstNAme, LastName, email, password, gender, birthday} = req.body
    userControllers.createUser({firstNAme, LastName, email, password, gender, birthday})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message:err.mesaage, fields: {
                firstName: 'String',
                lastName: 'String',
                email: 'example@gmail.com',
                password: 'String',
                gender: 'String',
                birthday:'YYYY/MM/DD'
            }})
        })
}

//este patchUser va estar restringido. solo los admins van a poder ejecutarlo
const patchUser = (req, res) => {
        const id = req.params.id
        const {firstName, lastName, email, gender, birthday, rol, status} = req.body

        userControllers.updateUser(id, {firstName, lastName, email, gender, birthday, rol, status} )
            .then((data) => {
                if(data){
                    res.status(200).json({message:'User edited succesfully with id'})
                } else {
                    res.status(404).json({message:`User with id: ${id}, not found`})
                }
            })
            .catch((err) => {
                res.status(400).json({message: err.message})
            })
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    const {firstName, LastName, gender, birthday} = req.body
    userControllers.updateUser(id, {firstNAme, lastName, gender, birthday})
        .then(() => {
            res.status(200).json({message:'Your user was edited succesfully'})
        })
        .catch((err) => {
            res.status(400).json({message:err.message})
        })

}