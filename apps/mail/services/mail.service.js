import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1652519530000, // September 13, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'momo@momo.com',
        isMarked: false,
    },
    {
        id: 'e102',
        subject: 'Slack- new message',
        body: 'New message in group conversation with Stav Cohen and Risan Benichou - Coding Academy',
        isRead: false,
        sentAt: 1652433130000, // September 12, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'stav@momo.com',
        isMarked: false,
    },
    {
        id: 'e103',
        subject: 'Important Announcement',
        body: 'Please be informed that our office will be closed on Friday for maintenance.',
        isRead: true,
        sentAt: 1652346730000, // September 11, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'office@company.com',
        isMarked: false,
    },
    {
        id: 'e104',
        subject: 'Weekly Newsletter',
        body: 'Check out our latest newsletter for updates and news!',
        isRead: false,
        sentAt: 1652260330000, // September 10, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'newsletter@company.com',
        isMarked: false,
    },
    {
        id: 'e105',
        subject: 'Invoice Due Reminder',
        body: 'This is a reminder that your invoice is due in 3 days. Please make the payment.',
        isRead: false,
        sentAt: 1652173930000, // September 9, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'billing@company.com',
        isMarked: false,
    },
    {
        id: 'e106',
        subject: 'Meeting Invitation',
        body: 'You are invited to a team meeting scheduled for next Monday at 10 AM.',
        isRead: true,
        sentAt: 1652087530000, // September 8, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'manager@company.com',
        isMarked: false,
    },
    {
        id: 'e107',
        subject: 'New Product Launch',
        body: 'Our new product is now available. Check it out on our website!',
        isRead: false,
        sentAt: 1652001130000, // September 7, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'marketing@company.com',
        isMarked: false,
    },
    {
        id: 'e108',
        subject: 'Job Application Status',
        body: 'We are pleased to inform you that your job application has been approved.',
        isRead: true,
        sentAt: 1651914730000, // September 6, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'hr@company.com',
        isMarked: false,
    },
    {
        id: 'e109',
        subject: 'Holiday Greetings',
        body: 'Wishing you a wonderful holiday season and a happy new year!',
        isRead: false,
        sentAt: 1651828330000, // September 5, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'ceo@company.com',
        isMarked: false,
    },
    {
        id: 'e110',
        subject: 'Product Feedback Request',
        body: 'We value your opinion! Please take a moment to provide feedback on our products.',
        isRead: true,
        sentAt: 1651741930000, // September 4, 2022
        removedAt: null,
        from: 'feedback@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e111',
        subject: 'Promotion Alert',
        body: 'Don\'t miss out on our special promotion this weekend!',
        isRead: false,
        sentAt: 1651655530000, // September 3, 2022
        removedAt: null,
        from: 'marketing@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e112',
        subject: 'Feedback Request',
        body: 'We would appreciate your feedback on our recent customer service interaction.',
        isRead: true,
        sentAt: 1651569130000, // September 2, 2022
        removedAt: null,
        from: 'customerservice@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e113',
        subject: 'Invitation to Webinar',
        body: 'Join our upcoming webinar on the latest industry trends and best practices.',
        isRead: false,
        sentAt: 1651482730000, // September 1, 2022
        removedAt: null,
        from: 'webinars@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e114',
        subject: 'Important Update',
        body: 'We have made some important updates to our terms of service. Please review them.',
        isRead: true,
        sentAt: 1651396330000, // August 31, 2022
        removedAt: null,
        from: 'legal@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e115',
        subject: 'Thank You for Your Purchase',
        body: 'Thank you for shopping with us! Here is your order confirmation.',
        isRead: false,
        sentAt: 1651309930000, // August 30, 2022
        removedAt: null,
        from: 'orders@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e116',
        subject: 'New Project Proposal',
        body: `We have a new project proposal that we'd like your input on. Please review and provide feedback.`,
        isRead: true,
        sentAt: 1651223530000, // August 29, 2022
        removedAt: null,
        from: 'projectmanager@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e117',
        subject: 'Upcoming Training Session',
        body: 'You are invited to attend our upcoming training session on advanced coding techniques.',
        isRead: false,
        sentAt: 1651133930594, // September 13, 2022
        removedAt: null,
        from: 'training@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e118',
        subject: 'New Project Kickoff Meeting',
        body: 'Join us for the kickoff meeting of our exciting new project next week.',
        isRead: true,
        sentAt: 1651047530594, // September 12, 2022
        removedAt: null,
        from: 'projectmanager@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e119',
        subject: 'Weekly Status Report',
        body: 'Here is your weekly status report summarizing the progress of your projects.',
        isRead: false,
        sentAt: 1650961130594, // September 11, 2022
        removedAt: null,
        from: 'reports@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e120',
        subject: 'Product Release Notes',
        body: 'Check out the release notes for our latest product update. Exciting new features await!',
        isRead: true,
        sentAt: 1650874730594, // September 10, 2022
        removedAt: null,
        from: 'product@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e121',
        subject: 'Team Building Event',
        body: 'Join us for a fun team building event this Friday. Don\'t forget to RSVP!',
        isRead: false,
        sentAt: 1650788330594, // September 9, 2022
        removedAt: null,
        from: 'teambuilding@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e122',
        subject: 'Last Chance Sale',
        body: 'Hurry! Our last chance sale ends tonight. Grab the best deals now!',
        isRead: true,
        sentAt: 1650701930594, // September 8, 2022
        removedAt: 1650788330594, // September 9, 2022
        from: 'sales@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e123',
        subject: 'Important Security Update',
        body: 'We have detected a security vulnerability in your account. Take action immediately.',
        isRead: false,
        sentAt: 1650615530594, // September 7, 2022
        removedAt: 1650701930594, // September 8, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e124',
        subject: 'Upcoming Webinar Reminder',
        body: 'A friendly reminder about our upcoming webinar on digital marketing strategies.',
        isRead: true,
        sentAt: 1650529130594, // September 6, 2022
        removedAt: 1650615530594, // September 7, 2022
        from: 'webinars@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e125',
        subject: 'Account Activation',
        body: 'Welcome to our platform! Click here to activate your account and get started.',
        isRead: false,
        sentAt: 1650442730594, // September 5, 2022
        removedAt: 1650529130594, // September 6, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e126',
        subject: 'Monthly Performance Report',
        body: 'Here is your monthly performance report for August 2022. Keep up the good work!',
        isRead: true,
        sentAt: 1650356330594, // September 4, 2022
        removedAt: 1650442730594, // September 5, 2022
        from: 'reports@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e127',
        subject: 'New Job Opening',
        body: 'We have a new job opening that matches your skills. Apply now!',
        isRead: false,
        sentAt: 1650269930594, // September 3, 2022
        removedAt: 1650356330594, // September 4, 2022
        from: 'hr@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e128',
        subject: 'Customer Satisfaction Survey',
        body: 'Your feedback matters! Please take a moment to complete our customer satisfaction survey.',
        isRead: true,
        sentAt: 1650183530594, // September 2, 2022
        removedAt: 1650269930594, // September 3, 2022
        from: 'feedback@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e129',
        subject: 'New Feature Announcement',
        body: 'We are excited to announce a new feature coming to our platform. Stay tuned!',
        isRead: false,
        sentAt: 1650097130594, // September 1, 2022
        removedAt: 1650183530594, // September 2, 2022
        from: 'product@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e130',
        subject: 'Account Verification Required',
        body: 'To enhance security, please verify your email address by clicking the link below.',
        isRead: true,
        sentAt: 1650010730594, // August 31, 2022
        removedAt: 1650097130594, // September 1, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e131',
        subject: 'Product Update - Bug Fixes',
        body: `We've released an update with important bug fixes. Update your app now!`,
        isRead: false,
        sentAt: 1649924330594, // August 30, 2022
        removedAt: 1650010730594, // August 31, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e132',
        subject: 'Special Promotion - Limited Time Offer',
        body: `Don't miss out on our limited-time promotion. Save big on your next purchase!`,
        isRead: true,
        sentAt: 1649837930594, // August 29, 2022
        removedAt: 1649924330594, // August 30, 2022
        from: 'sales@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e133',
        subject: 'Account Password Reset',
        body: `You've requested a password reset. Click here to reset your password.`,
        isRead: false,
        sentAt: 1649751530594, // August 28, 2022
        removedAt: 1649837930594, // August 29, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e134',
        subject: 'Important Announcement - Service Downtime',
        body: 'Our service will undergo scheduled maintenance on Sunday. Apologies for any inconvenience.',
        isRead: true,
        sentAt: 1649665130594, // August 27, 2022
        removedAt: 1649751530594, // August 28, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
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
    createEmail,
    isEmailsMark,
    removeEmails,
    setIsMarked,
    setAllEmailsMarked,
}

function createEmail(to, subject, body) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: true,
        sentAt: Date.now(),
        removedAt: null,
        from: loggedinUser.email,
        to,
        isMarked: false,
    }
}

function query(filterBy) {
    return storageService.query(EMAIL_KEY).then(emails => {
        if (filterBy.isShowUnread) emails = emails.filter(email => email.isRead === false)
        if (filterBy.mailType === 'inbox') return emails.filter(email => email.from !== loggedinUser.email && !email.removedAt)
        if (filterBy.mailType === 'sent') return emails.filter(email => email.from === loggedinUser.email && !email.removedAt)
        if (filterBy.mailType === 'trash') return emails.filter(email => email.removedAt)
        if (filterBy.searchKey) return emails.filter(email => (email.body.toLowerCase().includes(filterBy.searchKey.toLowerCase()) || email.subject.toLowerCase().includes(filterBy.searchKey.toLowerCase())) && !email.removedAt)
    })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
    // .then(email => {
    //     email = _setNextPrevCarId(email)
    //     return email
    // })
}

function post(email) {
    return storageService.post(EMAIL_KEY, email)
}

function getCountUnreadMessages() {
    return query({ mailType: 'inbox' }).then(emails => {
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

function isEmailsMark(emails) {
    const idx = emails.findIndex(email => {
        return email.isMarked === true
    })
    return (idx >= 0) ? true : false
}

function removeEmails() {
    return storageService.query(EMAIL_KEY).then(emails => {
        emails.forEach(email => {
            if (email.isMarked && !email.removedAt) email.removedAt = Date.now()
            if (email.isMarked && email.removedAt){ ////////////////////////////////////////////gettttttttttttttttttttttttttttt
                let emails = utilService.loadFromStorage(EMAIL_KEY)
                const idx = emails.findIndex(currEmail => currEmail.id === email.id)
                emails.splice(idx, 1)
                utilService.saveToStorage(EMAIL_KEY, emails)
            } 
        })
    })
}

function setIsMarked(email, isMarked) {
    email.isMarked = isMarked
    return storageService.put(EMAIL_KEY, email)
}

function setAllEmailsMarked() {
    return storageService.query(EMAIL_KEY).then(emails => {
        emails.forEach(email => {
            email.isMarked = false
        })
        utilService.saveToStorage(EMAIL_KEY, emails)
    })
}