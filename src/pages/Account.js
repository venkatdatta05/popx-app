const Account = () => {
  const user = JSON.parse(localStorage.getItem("popx_user"));

  return (
    <div className="container">
      <div className="card">
        <h2>Account Settings</h2>

        {user ? (
          <>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company}</p>
            <p>Agency: {user.agency}</p>
          </>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default Account;
