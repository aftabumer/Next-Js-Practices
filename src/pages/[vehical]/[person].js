// for dynamic rout folder structure

// export default function Person() {
//   return <h1>dynamic route</h1>;
// }

// for dynamic rout folder structure with params

import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  return (
    <h1>
      {router.query.person}'s {router.query.vehical}
    </h1>
  );
}
