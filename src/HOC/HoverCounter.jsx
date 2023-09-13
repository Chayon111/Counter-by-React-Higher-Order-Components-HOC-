import WithCounter from "./WithCounter";

// eslint-disable-next-line react-refresh/only-export-components
const HoverCounter = (props) => {
    // eslint-disable-next-line react/prop-types
    const {count, incrementCount} = props;
    return(
        <div>
            <h1 onMouseOver={incrementCount} style={{border:"5px solid red"}} >Hovered {count} Times </h1>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithCounter(HoverCounter);