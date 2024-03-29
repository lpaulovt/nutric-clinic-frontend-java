import { redirect } from "next/navigation";

import { PRIVATE_ROUTES } from "@/app/infrastructure/navigation";
import { getUser } from "@/lib/auth";
import { ProfileTypeEnum } from "@/app/types/User";

export default async function InitialScreen() {
  const { profile } = await getUser();
  if (profile.type === ProfileTypeEnum.nutritionist)
    redirect(PRIVATE_ROUTES.NUTRITIONIST_HOME);
  if (profile.type === ProfileTypeEnum.patient)
    redirect(PRIVATE_ROUTES.PATIENT_HOME);
  return <div />;
}
