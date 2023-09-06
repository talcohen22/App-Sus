import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'

const { useEffect, useState } = React

export function MailIndex() {

    const [emails, setEmails] = useState(null)

    useEffect(() => {
        mailService.query().then(res => {
            setEmails(res)
        })
    }, [])

    if (!emails) return
    return (
        <section className="mails-layout">
            <aside className="features">
                <i className="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-inbox"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-solid fa-trash-can"></i>
                <i className="fa-regular fa-paper-plane"></i>
            </aside>

            <MailList emails={emails} />
        </section>

    )
}

