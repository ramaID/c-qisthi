import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { AllProps, UserCollection } from "~/types/generated";

export async function loader({ context }: LoaderArgs) {
  const response = (await fetch(`${context.API_ENDPOINT}/users`).then(
    (response) => response.json()
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
        <li key={user.name}>
          <Link to={user.name} className="text-blue-600 underline">
            {user.name}
          </Link>
        </li>
      ))}
    </main>
  );
}
