import React from "react";
import Job from "./Job";
interface Props {
  job: Jobs[];
}
interface Jobs {
  name: string;
  id: number;
  status: boolean;
}
export default function Jobs(props: Props) {
  console.log("123", props);
  //   destructoring
  const { job } = props;
  return (
    <div>
      Jobs
      {job.map((item, index) => {
        return <Job nameJob={item.name}></Job>;
      })}
    </div>
  );
}
