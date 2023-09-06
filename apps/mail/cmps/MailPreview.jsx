
export function MailPreview({ email }) {
    console.log(email);

    function getDateFormat() {
        const todayDate = new Date()

        const date = new Date(email.sentAt)
        const day = date.getDate()
        const month = date.getMonth() + 1
        let year = date.getFullYear()

        if (year === todayDate.getFullYear()) return day + '/' + month
        return day + '/' + month + '/' + year
    }

    return (
        <tr >
            <td>{email.from}</td>
            <td>{email.subject}</td>
            <td>{getDateFormat()}</td>
        </tr>

    )
}