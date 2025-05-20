
const Transfer = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="p-4 shadow rounded bg-white w-100" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Transfer Amount</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient Account Number"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Amount to Transfer"
            required
            min="1"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Transfer
        </button>
      </form>
    </div>
  </div>
);

export default Transfer;
