import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'
import { NewEmail } from '../cmps/NewEmail.jsx'

const { useEffect, useState } = React

export function MailIndex() {

    const [emails, setEmails] = useState(null)
    const [countUnreadMessages, setCountUnreadMessages] = useState(0)
    const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false)

    useEffect(() => {
        mailService.query().then(res => {
            setEmails(res)
        })
        mailService.getCountUnreadMessages().then(res => {
            setCountUnreadMessages(res)
        })
    }, [])

    function openNewMessageModal() {
        setIsNewMessageModalOpen(true)
    }

    if (!emails) return
    return (
        <section className="mails-layout">
            <aside className="features">
                <i className="fa-solid fa-pencil" onClick={() => openNewMessageModal()}></i>
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
            {isNewMessageModalOpen && <NewEmail/>}
        </section>

    )
}

