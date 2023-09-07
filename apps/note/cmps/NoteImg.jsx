export function NoteImg({ note }) {
    const { info, title } = note
    return (
        <React.Fragment>
            {info.img !== undefined && <img src={info.img} alt="imgggg" />}
            {title !== undefined && <p>{title}</p>}
            {info.txt !== undefined && <p>{info.txt}</p>}
        </React.Fragment>
    )
}
