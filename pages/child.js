function Child({handleClick}) {
    return (
      <div>
        <button style={{background:"red"}} onClick={event => handleClick(event, 100)}>
          Click
        </button>
      </div>
    );
  }

  console.log("sdakfj")

  export default Child;