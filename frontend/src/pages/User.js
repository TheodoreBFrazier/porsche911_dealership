import React from "react"

function UserPage() {
    return (
        <div className="user-portal">

                <div className="user-portal-sidebar">
                    <div className="users-porsche">
                        <h2>Hello!</h2>
                    </div>
                </div>
                <div className="page">
                    <div className="portal-information">
                        <div className="user-car">
                            <p>You don't have a Porsche yet.</p>
                        </div>
                        <div className="saved-cars">
                            <h2>No Cars Saved Yet</h2>
                        </div>
                    </div>
                </div>    
        </div>
    );
}

export default UserPage