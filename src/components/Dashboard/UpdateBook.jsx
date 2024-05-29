import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function UpdateBook() {
  const book = useLoaderData();
  const [id, setId] = useState(book.id);
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [img_url, setImageURL] = useState(book.img_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const author = form.author.value;
    const description = form.description.value;
    const img_url = form.img_url.value;

    const data = { id, title, price, description, author, img_url };
    await fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-bold">Update Book</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-5 mb-5 grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="font-bold my-1">Picture URL of the book:</h1>
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="Picture URL of the book"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Book Title</h1>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Author name</h1>
              <input
                type="text"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Price</h1>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">ID</h1>
              <input
                type="text"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Detail description</h1>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detail description"
                className="textarea textarea-bordered w-full max-w-xl"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Update Book"
                className="w-full max-w-xl mt-8  my-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
