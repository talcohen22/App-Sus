import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Slack- new message',
        body: 'New message in group conversation with Stav Cohen and Risan Benichou - Coding Academy',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'stav@momo.com',
        to: 'user@appsus.com'
    }
]

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const EMAIL_KEY = 'emailDB'

_createEmails()

export const mailService = {
    query,
    get,
    put,
    getCountUnreadMessages,
    post,
    createEmail
}

function createEmail(to, subject, body){
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: true,
        sentAt: Date.now(),
        removedAt: null,
        from: loggedinUser.email,
        to
    }
}

function query() {
    return storageService.query(EMAIL_KEY).then(emails => {
        return emails.filter(email => email.from !== loggedinUser.email)
    })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
    // .then(email => {
    //     email = _setNextPrevCarId(email)
    //     return email
    // })
}

function post(email){
    return storageService.post(EMAIL_KEY, email)
}

function getCountUnreadMessages() {
    return storageService.query(EMAIL_KEY).then(emails => {
        return emails.filter(email => !email.isRead).length
    })
}

function put(email) {
    return storageService.put(EMAIL_KEY, email)
}

function _createEmails() {
    const emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) utilService.saveToStorage(EMAIL_KEY, EMAILS)
}