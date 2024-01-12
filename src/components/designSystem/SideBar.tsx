"use client";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "./Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  const pathname = usePathname();
  const currentPage = pathname;
  console.log("currentPage", currentPage);
  const router = useRouter();

  const goToPage = (route: string) => {
    router.push(`/${route}`);
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
      route: "nutritionist/home",
      icon: "home",
    },
    {
      id: 2,
      title: "Pacientes",
      route: "nutritionist/patients",
      icon: "users",
    },
    {
      id: 5,
      title: "Recados",
      route: "nutritionist/messages",
      icon: "alert-circle",
    },
    {
      id: 6,
      title: "Consultas",
      route: "nutritionist/consultations",
      icon: "calendar-heart",
    },
    {
      id: 7,
      title: "Agenda",
      route: "nutritionist/schedule",
      icon: "calendar",
    },
    {
      id: 8,
      title: "Locais de atendimentos",
      route: "nutritionist/serviceLocations",
      icon: "map-pin",
    },
    {
      id: 9,
      title: "Meu Perfil",
      route: "nutritionist/profile",
      icon: "user",
    },
    {
      id: 11,
      title: "Sair",
      route: "logout",
      icon: "log-out",
      onClick: () => logout("/"),
    },
  ];

  return (
    <nav className="mt-10 mb-10">
      <div className="w-full h-full flex flex-col gap-2 items-center justify-start border-r border-solid border-border px-5 ">
        {nutricionistMenuOptions.map(({ title, route, icon, id, onClick }) => {
          function handleOnClick() {
            if (route === "logout") {
              return onClick && onClick();
            }

            return goToPage(route);
          }
          return (
            <div key={id} className="group  w-full h-9 ">
              <button
                className={` w-full h-9 flex gap-2 items-center px-3 rounded-md py-0.5 transition-all ${
                  currentPage === `/${route}` && "bg-brand"
                } group-hover:bg-brand`}
                onClick={handleOnClick}
              >
                <Icon
                  name={icon as keyof typeof dynamicIconImports}
                  height={16}
                  width={16}
                  className={`${
                    currentPage === `/${route}` ? "text-white" : "text-gray500"
                  } transition-all group-hover:text-white`}
                />
                <span
                  className={`text-[14px] font-medium  transition-all ${
                    currentPage === `/${route}` ? "text-white" : "text-gray500"
                  } group-hover:text-white`}
                >
                  {title}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default SideBar;
