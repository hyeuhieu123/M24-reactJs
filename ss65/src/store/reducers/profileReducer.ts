import { ActionInterface, ProfileInterface } from "../../interface/interface";

const initialProfile: ProfileInterface[] = [
  {
    id: 1,
    name: "hieu",
    gender: "nam",
    birthOfDate: "24032005",
    address: {
      district: "caugiay",
      city: "ha noi",
    },
  },
];

export const profileReducer = (
  state = initialProfile,
  action: ActionInterface
) => {
  switch (action.type) {
    default:
      return state;
  }
};
