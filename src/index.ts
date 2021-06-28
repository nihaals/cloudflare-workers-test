import { throwPage } from "./throw";

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/throw")) {
    return throwPage(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};
