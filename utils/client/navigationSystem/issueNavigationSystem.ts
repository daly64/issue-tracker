import { useRouter } from "next/navigation";

const issueNavigationSystem = () => {
  const router = useRouter();
  return {
    goToIssuePage: () => router.push("/issues"),
    goToNewIssuePage: () => router.push("/issues/new"),
    goToEditIssuePage: (id: number) => router.push(`/issues/edit/${id}`),
  };
};
export default issueNavigationSystem;
