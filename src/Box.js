function Box({ width, height, backgroundColor, id, handleDelete }) {

    const myStyles = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor
    };

    return (
        <div>
            <div style={myStyles}></div>
            <button onClick={() => handleDelete(id)}>X</button>
        </div>
    )
}

export default Box;