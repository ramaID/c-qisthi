import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { json } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import type { AllProps, UserCollection } from "../types/generated";
import { useLoaderData } from "@remix-run/react";

export async function loader({ context }: LoaderArgs) {
  const response = (await fetch(`http://localhost:8000/api/v1/users`).then(
    (response) => response.json()
  )) as AllProps<UserCollection>;
  return json({ response });
}

export default function () {
  const { response } = useLoaderData<typeof loader>();
  return (
    <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
      <div className="pt-10 pb-16">
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Admin: User Page
          </h1>
        </div>
        <div className="px-4 sm:px-6 md:px-0">
          <div className="py-6">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead className="w-[100px] text-center">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {response.data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>1</TableCell>
                    <TableCell className="font-medium">
                      {user.attributes.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {user.attributes.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
