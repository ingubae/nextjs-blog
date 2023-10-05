import { UserData, UserIds } from "../pages/_app";

export async function getUsersData(): Promise<UserData[]> {
  const res = await fetch("http://localhost:3001/users");
  const allUsersData: UserData[] = await res.json();

  return allUsersData;

  //   // Sort posts by id
  //   return allUsersData.sort((a, b) => {
  //     if (a.id < b.id) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
}

export async function getUsersIds(): Promise<UserIds[]> {
  const res = await fetch("http://localhost:3001/users");
  const allUsersData: UserData[] = await res.json();

  const paths: UserIds[] = allUsersData.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return paths;
}

export async function getUserData(id: string): Promise<UserData> {
  const res = await fetch(`http://localhost:3001/users/${id}`);
  const userData: UserData = await res.json();

  return userData;
}
