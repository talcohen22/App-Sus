
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
        <div className="mail-container">
            <span>{email.from}</span>
            <span>{email.subject}</span>
            <span>{getDateFormat()}</span>
        </div>

    )
}