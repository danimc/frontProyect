const ENDPOINT = "http://127.0.0.1:8000/api";

export default function login({ email, password }) {
  return fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    console.log(res);
    if (!res.ok) throw new Error("Response is NOT ok");
    return true;
  });
}
