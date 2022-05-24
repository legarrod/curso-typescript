import React, { useEffect, useState } from 'react';
import CustomCard from '../components/CustomCard';
import { getData } from 'api/AsyncHttpRequest';
import SpinerCircle from 'components/Spiner/SpinerCircle';
import {useGlobalStore} from "store/useGlobalStore" 

export default function CardsComponents() {
  const urlBase = process.env.REACT_APP_API_BASE_URL;
  const [loading, setLoading] = useState(true);
  const {characterList, setCharacterList}: any = useGlobalStore();

  const cbGetresponse = (response: any) => {
    if (response) {
      setLoading(false);
      setCharacterList(response?.results);
    }
  };

  useEffect(() => {
    loading && getData(urlBase, cbGetresponse);
  }, [loading]);
  return (
    <div>
      {loading && <SpinerCircle />}
      {characterList.length && <CustomCard listCharacter={characterList} />}
    </div>
  );
}
