import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("could not load the cabin data");
  }

  return data;
}
export async function insertCabin(cabin) {
  // https://albgurqotvrijowiyzyu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${crypto.randomUUID()}-${cabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = ` https://albgurqotvrijowiyzyu.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();

  if (error) {
    throw new Error("the cabin could not be inserted");
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (storageError) {
    throw new Error("the cabin could not be inserted");
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("the cabin could not be deleted");
  }
  return data;
}
