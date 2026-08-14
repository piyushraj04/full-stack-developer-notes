function AuthEntry(Component) {

  return function AuthenticatedComponent(props) {

    const { username, password, role } = props;

    if (role === "Trainer") {

      if (username === "trainer" && password === "5678") {
        return (
          <Component
            user={username}
            role={role}
          />
        );
      }

      return <h2>Invalid Trainer Credentials</h2>;
    }

    if (role === "Student") {

      if (username === "student" && password === "1234") {
        return (
          <Component
            user={username}
            role={role}
          />
        );
      }

      return <h2>Invalid Student Credentials</h2>;
    }

    return <h2>Invalid Role</h2>;
  };
}

export default AuthEntry;