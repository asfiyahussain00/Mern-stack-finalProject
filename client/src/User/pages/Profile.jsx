import React from 'react'
import UserProfile from '../Components/UserProfile'

export default function Profile() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center" style={{ height: '90vh', width: '100 %' }}>
                <div className="col-md-4"><UserProfile /></div>
                <div className="col-md-8">
                    
                </div>
            </div>
        </div>
    )
}