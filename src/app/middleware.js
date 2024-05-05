import { updateSession } from "@/lib";


export async function middleware(request) {
  return await updateSession(request);
}


// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// const loggedInRoutes = ["/dashboard"];
// const loggedOutRoutes = ["/login", "/register"];

// export function middleware(req) {
//   console.log("cookies", cookies());

//   if (
//     !loggedInRoutes.some((path) => req.nextUrl.pathname.startsWith(path)) &&
//     !loggedOutRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
//   ) {
//     return NextResponse.next();
//   } else {
//     const myCookie = cookies();
//     let token = null;
//     if (myCookie.get("token")) {
//       token = myCookie.get("token").value;
//     }
//     if (
//       !token &&
//       loggedInRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
//     ) {
//       return NextResponse.redirect("/login");
//     } else if (
//       token &&
//       loggedOutRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
//     ) {
//       return NextResponse.redirect("/dashboard");
//     }
//   }
//   return NextResponse.next();
// }
