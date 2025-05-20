const Login = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="p-4 shadow rounded bg-white w-100" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  </div>
);

export default Login;
