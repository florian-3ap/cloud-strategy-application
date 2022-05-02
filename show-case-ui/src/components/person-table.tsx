import { FC, useCallback, useEffect } from "react";
import { PersonManagementApi } from "../api/person-management.api";
import { useQuery } from "react-query";

export const PersonTable: FC = () => {
  const fetchPersons = useCallback(() => PersonManagementApi.getAll(), []);

  const { data } = useQuery(["fetchAllPerson"], fetchPersons);

  return (
    <div className="flex flex-col space-y-20">
      <h1 className="text-3xl font-bold">Person Overview</h1>

      <div className="w-full mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  First Name
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Last Name
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Birthday
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((person) => (
                <tr key={person.id}>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {person.firstName}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {person.lastName}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {person.birthdate.toString()}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {person.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
