import { mailService } from '../services/mail.service.js'

const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function MailDetails() {
    const params = useParams()
    const [email, setEmail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        mailService.get(params.emailId).then(email => {
            email.isRead = true
            mailService.put(email).then(setEmail)
        })
    }, [])

    function markAsUnRead() {
        mailService.get(params.emailId).then(email => {
            email.isRead = false
            mailService.put(email).then(() => {
                onBack()
            })
        })
    }

    function onBack() {
        navigate(`/mail/${params.mailType}`)
    }

    if (!email) return
    return (
        <div className="mail-details-container">
            <i onClick={() => onBack()} className="fa-solid fa-arrow-left-long back-btn"></i>
            <h1>{email.subject}</h1>
            <img src="../../../assets/img/mail/user.png" alt="" />
            <h3>{email.from}</h3>
            <p>{email.body}</p>
            <button onClick={() => markAsUnRead()}>Mark as Unread</button>
        </div>
    )
}