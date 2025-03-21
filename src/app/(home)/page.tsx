import { HomeView } from "@/modules/home/ui/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server"

export const dynamic = "force-dynamic";

//The category ID is optional and will only be present if the user selects a category
interface PageProps {
  searchParams: Promise<{
    categoryId?: string,
  }>
}

const Page = async({ searchParams }: PageProps) => {
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch()

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
};

export default Page;