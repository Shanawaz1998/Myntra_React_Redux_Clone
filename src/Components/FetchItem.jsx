import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../Store/ItemsSlice";
import { fetchStatusAction } from "../Store/fetchStatusSlice";

export default function FetchItem() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  });
  return <></>;
}
