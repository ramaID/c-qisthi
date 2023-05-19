import { json } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { AllProps, UserResource } from "~/types/generated";
import invariant from "tiny-invariant";

const API_ENDPOINT = "http://localhost:8000/api";

export async function loader({ params }: LoaderArgs) {
  invariant(params.slug, `params.slug is required`);
  const response = (await fetch(`${API_ENDPOINT}/user/${params.slug}`).then(
    (response) => response.json()
  )) as AllProps<UserResource>;
  invariant(response, `User not found: ${params.slug}`);
  return json({ response });
}

export default function Users() {
  const { response } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Users</h1>
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {response.data.name}
      </h1>
    </main>
  );
}
