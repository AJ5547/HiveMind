const Cart = () => {
  return (
    <>
   <h1 className="text-center"> Your Cart *amount of items*</h1>
<div className="container-fluid">
  <div className="row">
    <div className="col-6">
      <p className="fs-5 fw-semibold">Item </p>
    </div>
    <div className="col">
      <p className="fs-5 fw-semibold">Price </p>
    </div>
    <div className="col">
      <p className="fs-5 fw-semibold">Quantity </p>
    </div>
    <div className="col">
      <p className="fs-5 fw-semibold">Total </p>
    </div>
  </div>
  <hr />
  <div className="border border-dark-subtle row h-25 m-1">
    <span className="col-6">
      <img src="empty" />
      <h3 className="d-inline"> *Item Name*</h3>
    </span>
    <p className="col"> *Price*</p>
    <p className="col pn-1"> *Quantity*</p>
    <p className="col"> </p>
  </div>
</div>
    </>
  );
};
