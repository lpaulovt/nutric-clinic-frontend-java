"use client";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "./Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { PRIVATE_ROUTES } from "@/app/infrastructure/navigation";
import { LogoutModal } from "./LogoutModal";

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  const pathname = usePathname();
  const currentPage = pathname;
  console.log("currentPage", currentPage);
  const router = useRouter();

  const goToPage = (route: string) => {
    router.push(route);
  };

  async function logout(route: string) {
    // await signOut({
    //   redirect: false,
    // })

    router.replace(route);
  }

  const nutricionistMenuOptions = [
    {
      id: 1,
      title: "Início",
      route: PRIVATE_ROUTES.NUTRITIONIST_HOME,
      icon: "home",
    },
    {
      id: 2,
      title: "Pacientes",
      route: PRIVATE_ROUTES.NUTRITIONIST_PATIENTS,
      icon: "users",
    },
    {
      id: 5,
      title: "Recados",
      route: PRIVATE_ROUTES.NUTRITIONIST_MESSAGE,
      icon: "alert-circle",
    },
    {
      id: 6,
      title: "Consultas",
      route: PRIVATE_ROUTES.NUTRITIONIST_CONSULTATIONS,
      icon: "calendar-heart",
    },
    {
      id: 7,
      title: "Agenda",
      route: PRIVATE_ROUTES.NUTRITIONIST_SCHEDULE,
      icon: "calendar",
    },
    {
      id: 8,
      title: "Locais de atendimentos",
      route: PRIVATE_ROUTES.NUTRITIONIST_SERVICE_LOCATIONS,
      icon: "map-pin",
    },
    {
      id: 9,
      title: "Meu Perfil",
      route: PRIVATE_ROUTES.NUTRITIONIST_PROFILE,
      icon: "user",
    },
  ];

  return (
    <nav className="mt-10 mb-10">
      <div className="w-full h-full flex flex-col gap-2 items-center justify-start border-r border-solid border-border px-5 ">
        {nutricionistMenuOptions.map(({ title, route, icon, id }) => {
          function handleOnClick() {
            return goToPage(route);
          }
          return (
            <div key={id} className="group  w-full h-9 ">
              <button
                className={` w-full h-9 flex gap-2 items-center px-3 rounded-md py-0.5 transition-all ${
                  currentPage === route && "bg-brand"
                } group-hover:bg-brand`}
                onClick={handleOnClick}
              >
                <Icon
                  name={icon as keyof typeof dynamicIconImports}
                  height={16}
                  width={16}
                  className={`${
                    currentPage === route ? "text-white" : "text-gray500"
                  } transition-all group-hover:text-white`}
                />
                <span
                  className={`text-[14px] font-medium  transition-all ${
                    currentPage === route ? "text-white" : "text-gray500"
                  } group-hover:text-white`}
                >
                  {title}
                </span>
              </button>
            </div>
          );
        })}

        <LogoutModal onLogout={() => logout("/")} />
      </div>
    </nav>
  );
};

export default SideBar;
