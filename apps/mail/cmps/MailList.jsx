import { MailPreview } from './MailPreview.jsx'


export function MailList({ emails }) {
    return (
        <React.Fragment>
            <table className="mails-container">
                {emails.map(email =>
                    <tbody key={email.id}>
                        <MailPreview email={email} />
                    </tbody>)}
            </table>
        </React.Fragment >
    )
}
