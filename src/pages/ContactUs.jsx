export default function ContactUs() {
  return (
    <div id="shadow">
      <h1 className="text-3xl font-bold text-center text-black-500">
        Contact with developers
      </h1>
      <p className="text-center pt-3 text-[17px]">
        Make us know about any bugs
      </p>
      <div className="flex flex-col w-full lg:flex-row my-10">
        <div className="grid flex-grow rounded-box place-items-center">
          <form className="card flex-shrink-0 w-full max-w-sm">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="input input-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  className="input input-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Complaints</span>
                </label>
                <textarea
                  name="complaints"
                  className="textarea textarea-primary"
                  placeholder="Complaints"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input className="my-btn" type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
