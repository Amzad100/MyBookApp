import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleBookCardDashboard({ book }) {
  // eslint-disable-next-line react/prop-types
  const { id, title, author, price, img_url } = book;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <tr>
        <th>{id}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{price}</td>
        <td>
          <Link to={`/books/${id}`}>
            <button className="my-btn">View Details</button>
          </Link>
        </td>
        <td>
          <Link to={`updatebook/${id}`}>
            <button className="my-btn">Update</button>
          </Link>
        </td>
        <td>
          <Link>
            <button onClick={handleDelete} className="my-btn">
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
}
