// import { z } from "zod";

// export default async function POST(request: Request) {
//   try {
//     const credentials = await request.json();
//     const parsedCredentials = z
//       .object({ email: z.string().email(), password: z.string().min(6) })
//       .safeParse(credentials);
//     console.log("parsedCredentials for register: ", parsedCredentials);

//     if (parsedCredentials.success) {
//       const { email, password } = parsedCredentials.data;
//     }

//     console.log("Invalid credentials");
//     return null;
//   } catch (e) {
//     console.log("e: ", e);
//   }
// }
