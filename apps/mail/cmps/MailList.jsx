import { MailPreview } from './MailPreview.jsx'


export function MailList({ emails, filterBy }) {
    return (
        <React.Fragment>
            <table className="mails-container">
                {emails.map(email =>
                    <tbody key={email.id}>
                        <MailPreview email={email} filterBy={filterBy} />
                    </tbody>)}
            </table>
        </React.Fragment >
    )
}
