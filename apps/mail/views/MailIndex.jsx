import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'
// import {aa} from '../../../assets/img/mail/icons/asset 23.png'

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
        <section className="mail-container">
            <aside className="features">
                <i class="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-inbox"></i>
                <i class="fa-regular fa-star"></i>
                <i className="fa-solid fa-trash-can"></i>
                <i className="fa-regular fa-paper-plane"></i>
            </aside>

            <MailList emails={emails} />
        </section>

    )
}

