import { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "./prismadb";

const serverAuth = async (req: NextApiRequest) => {
  // const session = await getServerSession(req, res, authOptions);
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not signed in user email in session");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
