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
        const rPath = params.mailType ? params.mailType : 'inbox'
        navigate(`/mail/${rPath}/${email.id}`)
    }

    function onMarkMail(ev) {
        const rPath = params.mailType ? params.mailType : params.searchKey ? params.searchKey : 'inbox'
        navigate(`/mail/${rPath}`)
        mailService.setIsMarked(email, ev.target.checked).then(res => {
            markMail()
            navigate(`/mail/${rPath}`)
        })
    }

    const dyClass = email.isRead ? '' : 'bold'
    return (
        <tr onClick={onGetMail} className={dyClass}>
            <td className='checkbox-td'><input type="checkbox" name="" id="" onChange={onMarkMail} /></td>
            <td className='email-td'>{filterBy.mailType === 'sent' ? 'to: ' + email.to : email.from}</td>
            <td>{email.subject}</td>
            <td className='date-td'>{getDateFormat()}</td>
        </tr>
    )
}