import decode from "jwt-decode";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/app/types/User";
import Profile from "@/app/types/Profile";
import { axiosInstace } from "./axios";

export async function getUser() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) redirect("/");

  const decodedToken: User = decode(session.access);

  const profile = await axiosInstace.get(`/api/Profiles/${session.id}/`, {
    headers: { Authorization: `Bearer ${session.access}` },
  });

  const user = {
    token: session.access,
    refreshToken: session.refresh,
    ...decodedToken,
    id: decodedToken.user_id,
    profile: profile.data as Profile,
  };

  return user;
}
