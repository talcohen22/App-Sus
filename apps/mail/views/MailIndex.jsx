import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'
import { NewEmail } from '../cmps/NewEmail.jsx'
import { MailFeatures } from '../cmps/MailFeatures.jsx'

const { useEffect, useState } = React
const { useNavigate, useParams } = ReactRouterDOM

export function MailIndex() {

    const params = useParams()
    const [emails, setEmails] = useState(null)
    const [filterBy, setFilterBy] = useState({ mailType: params.mailType })
    const [countUnreadMessages, setCountUnreadMessages] = useState(0)
    const [isNewMsgModalOpen, setIsNewMsgModalOpen] = useState(false)
    const navigate = useNavigate()

    // useEffect(() => {
    //     setFilterBy({...filterBy, mailType: params.mailType})
    // }, [])

    useEffect(() => {
        mailService.query(filterBy).then(emails => {
            setEmails(emails)
            setCountUnreadMessages(mailService.getCountUnreadMessages(emails))
        })
    }, [filterBy])

    function onSetMailsType(type) {
        setFilterBy({ ...filterBy, mailType: type })
        navigate(`/mail/${type}`)
    }

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
            <MailFeatures onSetMailsType={onSetMailsType} openNewMsgModal={openNewMsgModal} countUnreadMessages={countUnreadMessages} />

            <MailList emails={emails} filterBy={filterBy} />
            {isNewMsgModalOpen && <NewEmail openNewMsgModal={openNewMsgModal} sendMail={sendMail} />}
        </section>

    )
}

