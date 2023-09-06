import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'

const { useEffect, useState } = React

export function MailIndex() {

    const [emails , setEmails] = useState(null)

    useEffect(() => {
        mailService.query().then(res => {
            setEmails(res)
        })
    }, [])

    if(!emails) return
    return (
        <section>
            <MailList emails={emails} />
        </section>

    )
}

