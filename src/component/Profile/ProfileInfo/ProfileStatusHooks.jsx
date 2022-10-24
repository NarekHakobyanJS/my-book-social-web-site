import React, {useEffect, useState} from "react";

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true)
    }
    const deactivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value) 
     }
    return (
        <>
            {!editMode && 
                <div>
                    MyStatus : <span onDoubleClick={activateEditeMode}>{props.status || "NO STATUS"}</span>
                </div>
            }

            {editMode && 
                <div>
                    <input 
                    onBlur={deactivateEditeMode}
                    value={status}
                    onChange={onStatusChange}
                    />
                </div>
            }
        </>
    )
}

export default ProfileStatusHooks