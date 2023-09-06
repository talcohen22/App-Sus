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

const EMAIL_KEY = 'emailDB'

_createEmails()

export const mailService = {
    query,
    get,
    put
}



function query() {
    return storageService.query(EMAIL_KEY)
}

function get(emailId){
    return storageService.get(EMAIL_KEY, emailId)
    // .then(email => {
    //     email = _setNextPrevCarId(email)
    //     return email
    // })
}

function put(email) {
    return storageService.put(EMAIL_KEY, email)
}

function _createEmails() {
    const emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) utilService.saveToStorage(EMAIL_KEY, EMAILS)
}