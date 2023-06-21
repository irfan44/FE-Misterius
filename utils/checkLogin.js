const isLoggedIn = () => {
  return localStorage.getItem("accessToken") !== null;
};

const token = () => {
  return localStorage.getItem("accessToken");
};

export { isLoggedIn, token };
