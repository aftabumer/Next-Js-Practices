// for dynamic rout folder structure

import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  return <h1>cosmatic item 1</h1>;
}
