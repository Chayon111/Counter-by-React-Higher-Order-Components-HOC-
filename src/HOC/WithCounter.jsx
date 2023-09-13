import React from "react";

const WithCounter = (OrginalCounter) => {
    class NewCounter extends React.Component{
        state = {
            count: 0,
        }

        handelCounter = () => {
            this.setState( (prevCount) => ({count: prevCount.count + 1 }));
        }

        render(){
            const {count} = this.state;
            return(
                <OrginalCounter count={count} incrementCount={this.handelCounter} />
            );
        }
    }
    return NewCounter;
}

export default WithCounter;