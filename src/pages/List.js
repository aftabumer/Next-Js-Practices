import Link from "next/link";

export default function List({ dummyList }) {
  console.log(dummyList);
  return (
    <div>
      {/* {dummy.map((item, i)=>(
                <div key={i}>
<Link as={`/${item.}/${item.}`} href="/[vehicle]/[person]">
            <a>Navigate to{}'s {}</a>
</Link>
                    </div>
            ))} */}
    </div>
  );
}

List.getInitialProps = async () => {
  const reponse = await fetch("https://reqres.in/api/users?page=2");
  const dummyList = await reponse.json();
  return { dummyList: [{ dummyList }] };
};
