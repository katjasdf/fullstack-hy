const Notification = ({ message }) => {
 
    if (message === 'remove') {
        return (
            <div className="notification">
                 deleted from server.
            </div>
        )
    } if (message === 'add') {
        return (
            <div className="notification">
                Person added!
            </div>
        )
    } if (message === 'update') {
        return (
            <div className="notification">
                Edits saved!
            </div>
        )
    } else return null

}

export default Notification