const { PrismaClient } = require('@prisma/client')

class Whatsapp {
    //create a post function to save whatsapp message
    post(userId, 
        whatsappId, 
        messageType, 
        messageText, 
        messageId, 
        messageObject, 
        messageMidia,
        onGroup,
        groupId,
        pushName,
        createdAt,
        updatedAt,
        description ) {
        return new Promise((resolve, reject) => {
            const prisma = new PrismaClient()
            prisma.WhatsappBL.create({
                data: {
                    userId: userId,
                    whatsappId: whatsappId,
                    messageType: messageType,
                    messageText: messageText,
                    messageId: messageId,
                    messageObject: messageObject,
                    messageMidia: messageMidia,
                    onGroup: onGroup,
                    groupId: groupId,
                    pushNames: pushName,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    description: description
                }
            })
            .then(() => {
                prisma.$disconnect()
                resolve()
            })
            .catch(error => {
                prisma.$disconnect()
                reject(error)
            })
        })
    }
    //create a get function to get whatsapp message
    get(whatsappId) {
        return new Promise((resolve, reject) => {
            const prisma = new PrismaClient()
            prisma.WhatsappBL.findMany({
                where: {
                    whatsappId: whatsappId
                }
            })
            .then(whatsapp => {
                prisma.$disconnect()
                resolve(whatsapp)
            })
            .catch(error => {
                prisma.$disconnect()
                reject(error)
            })
        })
    }
    //create a delete function to delete whatsapp message
    delete(userId, whatsappId) {
        return new Promise((resolve, reject) => {
            const prisma = new PrismaClient()
            prisma.whatsapp.delete({
                where: {
                    userId: userId,
                    whatsappId: whatsappId
                }
            })
            .then(() => {
                prisma.$disconnect()
                resolve()
            })
            .catch(error => {
                prisma.$disconnect()
                reject(error)
            })
        })
    }
}

module.exports = new Whatsapp