import React, { useEffect } from "react";
import { ctFul } from "../services/contentful";

const useSiteCopy = (props) => {
  const [siteCopy, setSiteCopy] = React.useState(null);
  const getSiteCopy = async () => {
    try {
      const response = await ctFul.getEntries();
      const filteredResponse = response.items.find(
        (item) => item.fields.page === props
      );
      setSiteCopy(filteredResponse.fields);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSiteCopy();
  }, []);
  return siteCopy;
};
export default useSiteCopy;
