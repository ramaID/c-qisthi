import { Form } from "@remix-run/react";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewUser() {
  return (
    <Form method="post">
      <p>
        <label>
          Username: <input type="text" name="name" className={inputClassName} />
        </label>
      </p>
      <p className="mb-3 mt-3">
        <label>
          Email: <input type="email" name="email" className={inputClassName} />
        </label>
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          Create User
        </button>
      </p>
    </Form>
  );
}
