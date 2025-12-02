import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <div>These are the user </div>
      username: {user?.username} <br />
      password: {user?.password}
    </div>
  );
}
