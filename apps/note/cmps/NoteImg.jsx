export function NoteImg({ info }) {
    console.log('NoteImg info', info)
    return (
        <React.Fragment>
            <img src={info.img} alt="'whattttttt" />
            <p>{info.title}</p>
        </React.Fragment>
    )
}
