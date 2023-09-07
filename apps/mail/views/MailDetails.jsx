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
            <div className='actions'>
                <i onClick={() => onBack()} className="fa-solid fa-arrow-left-long back-btn" ></i>
                <i class="fa-regular fa-envelope" onClick={() => markAsUnRead()} title="Mark as unread"></i>
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-tag"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-arrow-right-to-bracket fa-rotate-90"></i>
            </div>

            <h1>{email.subject}</h1>

            <div className='sent-by'>
                <img src="../../../assets/img/mail/user.png" alt="" />
                <p>{"<" + email.from + ">"}</p>
            </div>
            <p>{"to " + email.to}</p>

            <p>{email.body}</p>

            <div className='replay-forward-btn'>
                <button><i class="fa-solid fa-reply"></i>Replay</button>
                <button><i class="fa-solid fa-reply fa-flip-horizontal"></i>Forward</button>
            </div>

            {/* <button onClick={() => markAsUnRead()}>Mark as Unread</button> */}
        </div>
    )
}