const Notification = ({ data }) => {

    if (data.message === 'remove') {
        return (
            <div className="notification">
                {data.personName} deleted.
            </div>
        )
    } if (data.message === 'add') {
        return (
            <div className="notification">
                {data.personName} added!
            </div>
        )
    } if (data.message === 'update') {
        return (
            <div className="notification">
                {data.personName} updated!
            </div>
        )
    } if (data.message === 'error') {
        return (
            <div className="error">
                {data.personName} was already removed from server.
            </div>
        )
    } else return null

}

export default Notification