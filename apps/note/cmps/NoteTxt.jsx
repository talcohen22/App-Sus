export function NoteTxt({ note }) {
    const { info, title } = note
    return (
        <React.Fragment>
            {title !== undefined && <p>{title}</p>}
            {info.txt !== undefined && <p>{info.txt}</p>}
        </React.Fragment>
    )
}
