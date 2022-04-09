//create express post function
const Whatsapp = require('../models/whatsapp')

app.post('/whatsapp', (req, res) => {
        let userId = req.body.userId
        let whatsappId = req.body.whatsappId
        let messageType = req.body.messageType
        let messageText = req.body.messageText
        let messageId = req.body.messageId
        let messageObject = req.body.messageObject
        let messageMidia = req.body.messageMidia
        let onGroup = req.body.onGroup
        let groupId = req.body.groupId
        let pushName = req.body.pushName
        let createdAt = req.body.createdAt
        let updatedAt = req.body.updatedAt
        let description = req.body.description
        Whatsapp.post(userId, whatsappId, messageType, messageText, messageId, messageObject, messageMidia, onGroup, groupId, pushName, createdAt, updatedAt, description)
        .then(() => {
                res.send({
                        message: 'Whatsapp message saved'
                })
                }
        )
})
app.get('/whatsapp', (req, res) => {
        let userId = req.body.userId
        Whatsapp.get(userId)
        .then(whatsapp => {
                res.json(whatsapp)
        })
        .catch(error => {
                res.send(error)
        })
})

app.delete('/whatsapp', (req, res) => {
        let userId = req.body.userId
        Whatsapp.delete(userId)
        .then(whatsapp => {
                res.json(whatsapp)
        })
        .catch(error => {
                res.send(error)
        })
})