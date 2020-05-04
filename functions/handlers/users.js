const {db} = require('../util/admin')

exports.getAllUsers = (req, res) => {
    db
    .collection('users')
    .get()
    .then((data) => {
        let users = []
        data.forEach(doc => {
            users.push(doc.data())
        })
        return res.json(users)
    })
    .catch(err => console.log(err))
}

exports.getOneUser = (req, res) => {
    db
    .collection('users')
    .where('email', '==', req.query.email)
    .get()
    .then((snap) => {
        
        let user=[]

        if (snap.empty) {
            return res.json({erro: 'No Such Documents.'})
        }

        snap.forEach(doc => {
            user.push(doc.data())
        })        
        
        return res.json(user[0])

    })
    .catch(err => console.log(err))
}