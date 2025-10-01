// user.js
export const user = {
  id: 1,
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
};

export const getUserInfo = (u) => {
  return `User: ${u.name}, Email: ${u.email}`;
};
