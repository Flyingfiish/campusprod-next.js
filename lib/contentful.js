const contentful = require("contentful");

var client = contentful.createClient({
  space: "gta9n7irhv6e",
  accessToken: "uB-bmjkHZ5hDVFtLKRkeM7RaiSnuk_SMIwzM7gwifIo",
});

export async function getEntry(id) {
  const entry = await client.getEntry(id);
  const description = entry.fields.description.content.map(
    (content) => content.content[0].value
  );
  return { ...entry.fields, description };
}

export async function getEntries() {
  const entries = await client.getEntries();

  return entries.items.map((entry) => {
    const id = entry.sys.id;
    const createdAt = entry.sys.createdAt;
    const description = entry.fields.description.content.map(
      (content) => content.content[0].value
    );
    return { ...entry.fields, createdAt, description, id };
  });
}
