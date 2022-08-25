import { useRouter } from "next/router";

export default function business() {
  const router = useRouter();
  let pathName = router.query.business;
  return (
    <div className="MAIN-PAGE">
      <div>{pathName}</div>
    </div>
  );
}
