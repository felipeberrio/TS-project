(() => {
  type User = { email: string; password: string | number };

  const login = (user: User) => {
    console.log(user.email, user.password);
  };

  const jesusUser = {
    email: "hdjesus",
    password: 12121,
  };

  login(jesusUser);
})();
