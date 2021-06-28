export const throwPage = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const throwType = searchParams.get("type");
  switch (throwType) {
    case null: {
      return new Response("[a30b7b07] No error");
    }
    case "string": {
      throw "[be3bd631] Thrown string";
    }
    case "fetch": {
      await fetch("[626b61d9] Failed fetch");
      return new Response("[b0978a42] Failed fetch response");
    }
    case "promise-catch": {
      (async () => {
        throw "[294e277c] Try thrown string";
      })().catch((err) => {
        console.error("[380fa5f8]", err);

        // Based on initial contents of new Worker created from dashboard
        console.error("[7fe953d6]", err.stack);
      });
      return new Response("[b799fa3f] Promise catch response");
    }
    default: {
      return new Response("[be4e1f66] Not found");
    }
  }
};
