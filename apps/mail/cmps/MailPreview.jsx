const { useNavigate, useParams} = ReactRouterDOM

export function MailPreview({ email, filterBy }) {

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

    function onGetMail(){
        navigate(`/mail/${params.mailType}/${email.id}`)
    }

    const dyClass = email.isRead ? '' : 'bold'
    return (
            <tr onClick={onGetMail} className={dyClass}>
                <td>{filterBy.mailType === 'sent' ? 'to: ' + email.to : email.from}</td>
                <td>{email.subject}</td>
                <td>{getDateFormat()}</td>
            </tr>
    )
}