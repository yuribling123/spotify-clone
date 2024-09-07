import getSongsByTitle from "@/actions/getSongsbyTitle";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div>
      Search!
    </div>
  );
};

export default Search;
