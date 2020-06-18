import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
const s = serve({ port: 3000 });
console.log("http://localhost:3000/");
console.log(import.meta.main)

for await (const req of s) {
  console.log('hello deno~')
  req.respond({ body: "Hello World123\n" });
}