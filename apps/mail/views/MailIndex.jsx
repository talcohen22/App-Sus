import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'
import { NewEmail } from '../cmps/NewEmail.jsx'

const { useEffect, useState } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {

    const [emails, setEmails] = useState(null)
    const [countUnreadMessages, setCountUnreadMessages] = useState(0)
    const [isNewMsgModalOpen, setIsNewMsgModalOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        mailService.query().then(setEmails)
        mailService.getCountUnreadMessages().then(setCountUnreadMessages)
    }, [])

    function openNewMsgModal(isOpen) {
        setIsNewMsgModalOpen(isOpen)
    }

    function sendMail(ev) {
        navigate('/mail')
        setIsNewMsgModalOpen(false)

        const email = ev.target.email.value
        const subject = ev.target.subject.value
        const body = ev.target.body.value
        const newMail = mailService.createEmail(email, subject, body)

        mailService.post(newMail).then(() => {
            // mailService.query().then(setEmails)
        })
    }

    if (!emails) return
    return (
        <section className="mails-layout">
            <aside className="features">
                <i className="fa-solid fa-pencil" onClick={() => openNewMsgModal(true)}></i>
                {/* <i className="fa-solid fa-inbox"></i> */}
                <div>
                    <i className="fa-regular fa-envelope"></i>
                    {countUnreadMessages > 0 && <span className="unread-messages">{countUnreadMessages ? countUnreadMessages : ''}</span>}
                </div>
                <i className="fa-regular fa-star"></i>
                <i className="fa-solid fa-trash-can"></i>
                <i className="fa-regular fa-paper-plane"></i>
            </aside>

            <MailList emails={emails} />
            {isNewMsgModalOpen && <NewEmail openNewMsgModal={openNewMsgModal} sendMail={sendMail} />}
        </section>

    )
}

