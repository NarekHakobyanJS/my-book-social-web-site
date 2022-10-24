import React from "react";

class ProfileStatus extends React.Component {
    
    state = {
        editMode : false,
        status : this.props.status
    }

    activateEditeMode() {
        this.setState({
            editMode : true
        })
    }

    deactivateEditeMode() {
        this.setState({
            editMode : false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
       this.setState({
        status : e.currentTarget.value
       }) 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }
 
    render(){
        return (
            <>
                {!this.state.editMode && 
                <div>
                    MyStatus : <span onDoubleClick={this.activateEditeMode.bind(this)}>{this.props.status || "NO STATUS"}</span>
                </div>
                }
                {this.state.editMode && 
                <div>
                    <input onBlur={this.deactivateEditeMode.bind(this)} 
                    value={this.status}
                    onChange={this.onStatusChange}
                    />
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus