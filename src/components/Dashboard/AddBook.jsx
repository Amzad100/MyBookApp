export default function AddBook() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const author = form.author.value;
    const description = form.description.value;
    const img_url = form.img_url.value;

    const data = { id, title, price, description,author, img_url };

    await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-bold">Add a book page</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-5 mb-5 grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="font-bold my-1">Picture URL of the book:</h1>
              <input
                type="text"
                name="img_url"
                placeholder="Picture URL of the book"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Book Title</h1>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Author name</h1>
              <input
                type="text"
                name="author"
                placeholder="Author name"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Price</h1>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">ID</h1>
              <input
                type="text"
                name="id"
                placeholder="ID"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Detail description</h1>
              <textarea
                type="text"
                name="description"
                placeholder="Detail description"
                className="textarea textarea-bordered w-full max-w-xl"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Add a Book"
                className="w-full max-w-xl mt-8  my-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
