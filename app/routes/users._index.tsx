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
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Users</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <Link to={"/users/admin"} className="text-blue-600 underline">
            Admin Page
          </Link>
          <ul>
            {response.data.map((user) => (
              <li key={user.name}>
                <Link to={user.name} className="text-blue-600 underline">
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
