import { useRouter } from "next/navigation";

const navigationSystem = () => {
  const router = useRouter();
  return {
    goToIssuePage: () => router.push("/issues"),
    goToNewIssuePage: () => router.push("/issues/new"),
    goToEditIssuePage: (id: number) => router.push(`/issues/edit/=${id}`),
  };
};
export default navigationSystem;
