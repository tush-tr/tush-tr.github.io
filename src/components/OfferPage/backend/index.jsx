import HomeCard from "../../../UI/HomeCard";
import { BsCodeSlash } from "react-icons/bs";
const Backend = () => {
  return (
    <HomeCard>
      <h2>
        <BsCodeSlash /> BACK-END WEB DEVELOPMENT
      </h2>
      <p>
        In back-end development, my current stack involves Node.js & Express.js,
        Python and Django, and Golang.
      </p>
      <div>
        What I can do for you at that side is:
        <ul>
          <li>development of backends in Node.js/Python/Golang,</li>
          <li>
            splitting the back-end into separate domains and microservices,
          </li>
          <li>
            cooperation with APIs, remote data synchronizations, cloud servers.
          </li>
          <li>
            using different types of databases (like PostgreSQL, MySQL, MongoDB)
          </li>
          <li>
            dividing the servers into different machine nodes / docker
            containers.
          </li>
          <li>
            refactoring existing applications, by improving code readibility,
            separating concerns into separate functions/classes/modules.
          </li>
          <li>writing unit tests</li>
        </ul>
      </div>
    </HomeCard>
  );
};
export default Backend;
