import { Request, Response } from "express";

const createCurrentUser = async (req: Request, res: Response) => {
  //01.check if the user is already logged
  //02.create the user if it doesn't  exist
  //03.return the user object to the calling client

  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default { createCurrentUser };
