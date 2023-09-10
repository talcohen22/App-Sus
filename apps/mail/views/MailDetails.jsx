import { mailService } from '../services/mail.service.js'

const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function MailDetails() {
    const params = useParams()
    const [email, setEmail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        mailService.get(params.emailId).then((email) => {
            email.isRead = true
            mailService.put(email).then(setEmail)
        })
    }, [])

    function markAsUnRead() {
        mailService.get(params.emailId).then((email) => {
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
        <div className="mail-details-bgc">
            <div className="mail-details-container">
                <div className="actions back-narrow">
                    <i onClick={() => onBack()} className="fa-solid fa-arrow-left-long back-btn"></i>
                </div>
                <div className="actions">
                    <i
                        className="fa-regular fa-envelope"
                        onClick={() => markAsUnRead()}
                        title="Mark as unread"></i>
                    <i className="fa-solid fa-trash-can"></i>
                    <i className="fa-solid fa-tag"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-solid fa-gear"></i>
                    <i className="fa-solid fa-arrow-right-to-bracket fa-rotate-90"></i>
                </div>

                <h1>{email.subject}</h1>

                <div className="sent-by user-img">
                    <img src="./././assets/img/mail/user.png" alt="" />
                </div>
                <div className="sent-by">
                    <p>{'<' + email.from + '>'}</p>
                </div>
                <p className="sent-to">{'to ' + email.to}</p>

                <p className="mail-body">{email.body}</p>

                <div className="replay-forward-btn">
                    <button>
                        <i className="fa-solid fa-reply"></i>Replay
                    </button>
                    <button>
                        <i className="fa-solid fa-reply fa-flip-horizontal"></i>Forward
                    </button>
                </div>
            </div>
        </div>
    )
}
