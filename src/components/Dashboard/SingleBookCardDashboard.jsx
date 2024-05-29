import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function SingleBookCardDashboard({ book }) {
  // eslint-disable-next-line react/prop-types
  const { id, title, author, price, img_url } = book;

  const handleDelete = async () => {
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          title: "Deleted!",
          text: "Book deleted successfully!",
          icon: "success",
        });
        console.log(result);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the book.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the book.",
        icon: "error",
      });
    }
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
          <button onClick={handleDelete} className="my-btn">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
