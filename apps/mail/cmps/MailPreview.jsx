import { mailService } from '../services/mail.service.js'

const { useNavigate, useParams } = ReactRouterDOM

export function MailPreview({ email, filterBy, markMail }) {

    const navigate = useNavigate()
    const params = useParams()

    function getDateFormat() {
        const todayDate = new Date()

        const date = new Date(email.sentAt)
        const day = date.getDate()
        const month = date.getMonth() + 1
        let year = date.getFullYear()

        if (year === todayDate.getFullYear()) return day + '/' + month
        return day + '/' + month + '/' + year
    }

    function onGetMail() {
        navigate(`/mail/${params.mailType}/${email.id}`)
    }

    function onMarkMail(ev) {
        navigate(`/mail/${params.mailType}`)
        mailService.setIsMarked(email, ev.target.checked).then(res => {
            markMail()
            navigate(`/mail/${params.mailType}`)
        })
    }

    const dyClass = email.isRead ? '' : 'bold'
    return (
        <tr onClick={onGetMail} className={dyClass}>
            {(params.mailType !== 'trash') && <td><input type="checkbox" name="" id="" onChange={onMarkMail} /></td>}
            <td>{filterBy.mailType === 'sent' ? 'to: ' + email.to : email.from}</td>
            <td>{email.subject}</td>
            <td>{getDateFormat()}</td>
        </tr>
    )
}