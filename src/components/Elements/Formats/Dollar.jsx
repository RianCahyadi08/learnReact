const Dollar = (props) => {
    return new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(props.number);
  };
  
  export default Dollar;
  