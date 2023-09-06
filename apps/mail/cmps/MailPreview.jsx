const { useNavigate} = ReactRouterDOM

export function MailPreview({ email }) {

    const navigate = useNavigate()

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
        navigate(`/mail/${email.id}`)
    }

    const dyClass = email.isRead ? '' : 'bold'
    return (
            <tr onClick={onGetMail} className={dyClass}>
                <td>{email.from}</td>
                <td>{email.subject}</td>
                <td>{getDateFormat()}</td>
            </tr>
    )
}