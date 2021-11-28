import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "../store/actions/getUsersAction";
import { RootState } from "../store/reducers";

function Listado() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const result = useSelector((state: RootState) => state.users);
  console.log("result", result);

  useEffect(() => {
    dispatch(requestUser(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>e</div>
    </div>
  );
}

export default Listado;
