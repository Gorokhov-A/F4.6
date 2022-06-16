import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTitle, getCategory } from './utils/utils'

export default function RecipeList(props: any) {
  const { link } = useParams()
  const [apiData, setApiData] = useState([])

  const api = {
    baseurl: 'http://localhost:8000/',
    apiurl: 'api/',
  }

  const getApiData = () => {
    fetch(api.baseurl + api.apiurl)
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        window.localStorage.setItem('dataSet', JSON.stringify(data))
      })

      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <h1>RecipeList</h1>
      <section className="recipes">
        {apiData.map((data: any) => (
          <div className="recipe-card" key={data.id}>
            <h2 className="recipe-title">
              <Link
                to={'recipe/' + getTitle(data.title)}
                onClick={() => props.data(apiData)}
                className="recipe-link"
              >
                {data.title.toLowerCase()}
              </Link>
            </h2>

            <h4 className="recipe-subtitle">
              Category:<span> </span>
              <Link
                onClick={() => props.data(apiData)}
                to={'category/' + getCategory(data.category).toLowerCase()}
                className="recipe-link"
              >
                {getCategory(data.category)}
              </Link>
            </h4>
            <Link
              to={'recipe/' + getTitle(data.title)}
              onClick={() => props.data(apiData)}
            >
              <img src={data.img} alt={data.img} />
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}
