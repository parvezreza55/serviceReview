export const myReviews = (email) => {
  return fetch(`http://localhost:3000/review/?email=${email}`).then((res) =>
    res.json()
  );
};
