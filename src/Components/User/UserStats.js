import React, { useEffect } from "react";

import useFetch from "../../Hooks/useFetch";

import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

import { STATS_GET } from "../../api";

const UserStatsGraph = React.lazy(() => import("./UserStatsGraph"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
