const Rupiah = (props) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.number);
};

export default Rupiah;
