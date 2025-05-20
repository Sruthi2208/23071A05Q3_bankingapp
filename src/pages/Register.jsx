const Register = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="p-4 shadow rounded bg-white w-100" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Register</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Phone Number" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Address" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="City" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="State" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Country" required />
        </div>        
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  </div>
);

export default Register;
