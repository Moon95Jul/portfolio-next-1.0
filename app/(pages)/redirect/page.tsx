import { notFound, redirect } from "next/navigation";

export default function RedirectPage() {
  //if() // 로그인 여부 체크하는 로직
  notFound();
  //   redirect("/login");

  return <div className="">리다이렉트 페이지</div>;
}
