import React from "react"
import './styles.sass'

const DetailsUser = (): JSX.Element => {
    return (
        <>
            <div className="main_DetailsUser">
                <div className="contOptionUserInfo">
                    <i className="fas fa-bell" />
                    <div className="cntPrf">
                        <div className="Userprofile" />
                        <div className="nameDUser">
                            Admin
                        </div>                                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsUser
