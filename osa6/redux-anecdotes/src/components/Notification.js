import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)

    return (
        <div>
            {notification &&
          <div style={{ border: 'solid', padding: 10, marginBottom: 15 }}>
              {notification}
          </div>
            }
        </div>
    )
}

export default Notification