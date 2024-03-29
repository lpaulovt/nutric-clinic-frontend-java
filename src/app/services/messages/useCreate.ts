import { Message } from "@/app/types/Message";
import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateMessage = () => {
  return useMutation({
    mutationFn: (message: Partial<Message>) =>
      axiosAuth
        .post("/api/MessageClinis/", message)
        .then((response) => response.data),
  });
};
