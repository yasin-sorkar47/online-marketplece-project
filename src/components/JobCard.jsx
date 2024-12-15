/* eslint-disable react/prop-types */

import { format } from "date-fns";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    job_title,
    max_price,
    min_price,
    description,
    category,
    bid_count,
    date,
    _id,
  } = job;
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Deadline: {format(new Date(date), "P")}
        </span>
        <span
          className={`px-3 py-1 text-[8px]  uppercase ${
            category === "Web Development" &&
            "text-blue-500 bg-blue-100/60 text-xs"
          }  ${
            category === "Graphics Design" &&
            "text-red-500 bg-red-100/60 text-xs"
          }  ${
            category === "Digital Marketing" &&
            "text-green-500 bg-green-100/60 text-xs"
          }  rounded-full`}
        >
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p className="mt-2 text-sm text-gray-600 ">
          {description.substring(0, 90)}...
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${min_price} - ${max_price}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Total Bids: {bid_count}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
