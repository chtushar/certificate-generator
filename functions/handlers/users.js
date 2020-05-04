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