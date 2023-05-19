import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { AllProps, UserCollection } from "~/types/generated";

const API_ENDPOINT = "http://localhost:8000/api";

export async function loader() {
  const response = (await fetch(`${API_ENDPOINT}/users`).then((response) =>
    response.json()
  )) as AllProps<UserCollection>;
  return json({ response });
}

export default function Users() {
  const { response } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Users</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      {response.data.map((user) => (
        <li key={user.id}>
          <Link to={user.name} className="text-blue-600 underline">
            {user.name}
          </Link>
        </li>
      ))}
    </main>
  );
}
