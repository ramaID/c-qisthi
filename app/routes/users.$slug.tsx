import { json } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { AllProps, UserResource } from "~/types/generated";
import invariant from "tiny-invariant";

export async function loader({ params, context }: LoaderArgs) {
  invariant(params.slug, `params.slug is required`);
  const response = (await fetch(
    `${context.API_ENDPOINT}/v1/users/by-name/${params.slug}`
  ).then((response) => response.json())) as AllProps<UserResource>;
  invariant(response, `User not found: ${params.slug}`);
  return json({ response });
}

export default function UsersSlug() {
  const { response } = useLoaderData<typeof loader>();
  const { name, email } = response.data.attributes;
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          User Info
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Some info about the user.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {email}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
