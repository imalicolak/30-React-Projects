import React from 'react'
import Alert from '../components/Alert'

function AlertApp() {
    return (
        <div className="container mx-auto">
            <Alert
                type={'success'}
                message={'Login Success'}
            />
            <Alert
                type={'info'}
                message={'Time Triggered'}
                delay={true}
                delayTime={9000}
            />
        </div>
    )
}

export default AlertApp
