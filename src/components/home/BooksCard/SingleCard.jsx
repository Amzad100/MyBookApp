export default function SingleCard() {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/R9SbSkX/images.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Books!</h2>
          <p>If you want to be brilliant, you must read books!</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
