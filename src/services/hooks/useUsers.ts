import { api } from "../../services";
import { useQuery } from "react-query";

type UsersProps = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: UsersProps[];
};

//* Função que obtem a lista de usuarios, pode ser chamada em qualquer parte da aplicação
export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

//! Hook para obter a lista de usuarios, usando React-query
export function useUsers(
  page: number
  // options: UseQueryOptions
) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //! 10 Segundos
    // ...options,
  });
}

//? "users" Primeiro parametro da Query
//? "getUsers" Segundo parametro da Query
//? "staleTime" Terceiro parametro da Query
