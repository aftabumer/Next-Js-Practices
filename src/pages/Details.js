//  if we use route as href link the page was fully refresh

// import Link from "next/link";

// export default function Details() {
//   return (
//     <div>
//       <Link href="/car/aftab">
//         <a>nevigate to Aftab's car</a>
//       </Link>
//     </div>
//   );
// }

//  if we use route as object and pass folder path in href link the page was not fully refresh

// import Link from "next/link";

// export default function Details() {
//   return (
//     <div>
//       <Link as="/car/aftab" href="/[vehicle]/[person]">
//         <a>nevigate to Aftab's car</a>
//       </Link>
//     </div>
//   );
// }

//dynmaics routes from array of object

import Link from "next/link";

const people = [
  {
    vehicle: "car",
    name: "abc",
  },
  {
    vehicle: "bike",
    name: "mno",
  },
  {
    vehicle: "airoplane",
    name: "pqr",
  },
  {
    vehicle: "rakhshah",
    name: "xyz",
  },
];

export default function Details() {
  return (
    <div>
      {people.map((item, i) => (
        <div>
          <Link as={`/${item.vehicle}/${item.name}`} href="/[vehicle]/[person]">
            <a>nevigate to {item.name}'s {item.vehicle}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
