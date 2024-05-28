import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleCard({ book }) {
  // eslint-disable-next-line react/prop-types
  const { id, title, author, price, img_url } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img_url}
            alt="Shoes"
            className="rounded-xl w-full h-[350px]"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
          <p>{author}</p>
          <div className="card-actions">
            <Link to={`/books/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
