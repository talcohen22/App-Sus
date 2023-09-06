export function NoteImg({ info }) {
    console.log('NoteImg info', info)
    return (
        <React.Fragment>
            <img src={info.url} alt="" />
            <p>{info.title}</p>
        </React.Fragment>
    )
}
