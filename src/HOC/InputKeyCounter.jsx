import WithCounter from "./WithCounter";

// eslint-disable-next-line react-refresh/only-export-components
const InputKeyCounter = (props) => {
    // eslint-disable-next-line react/prop-types
    const {count, incrementCount} = props;
    return(
        <div>
            <input type="text" onChange={incrementCount} style={{padding: "20px", fontSize: "20px"}} />
            <span style={{padding: "10px", border:"1px solid red", borderRadius: "50%"}}> {count} </span>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithCounter(InputKeyCounter);

