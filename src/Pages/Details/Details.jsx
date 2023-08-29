import React from 'react'
import useFetch from '../../Hooks/UseFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailsBanner/DetailsBanner'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </>
  )
}

export default Details
