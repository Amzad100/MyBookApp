import { useLoaderData } from "react-router-dom";

export default function BookDetails() {
  const book = useLoaderData();
  const { title, author, price, description, img_url } = book;

  console.log(book);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img_url} alt="Shoes" className="rounded-xl max-w-7xl min-h-3.5" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
          <p>Description: {description}</p>
          <p>Author: {author}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
