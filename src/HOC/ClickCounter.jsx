import WithCounter from "./WithCounter"

// eslint-disable-next-line react-refresh/only-export-components
const ClickCounter = (props) => {
    // eslint-disable-next-line react/prop-types
    const {count, incrementCount} = props;
    return(
        <div>
            <button onClick={incrementCount} style={{fontSize: "30px"}} >Clicked {count} Times </button>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithCounter(ClickCounter);