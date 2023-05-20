import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { AllProps, UserCollection } from "~/types/generated";

export async function loader({ context }: LoaderArgs) {
  const response = (await fetch(`${context.API_ENDPOINT}/v1/users`).then(
    (response) => response.json()
  )) as AllProps<UserCollection>;
  return json({ response });
}

export default function UserAdmin() {
  const { response } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <Link to={"/users/admin"} className="text-blue-600 underline">
            Index Admin Page
          </Link>
          <ul>
            {response.data.map((user) => (
              <li key={user.id}>
                <Link
                  to={user.attributes.name}
                  className="text-blue-600 underline"
                >
                  {user.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
